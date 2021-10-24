ifeq ($(OS),Windows_NT)
	ifeq ($(PROCESSOR_ARCHITEW6432),AMD64)
		RUNTIME ?= win-x64
	else
		RUNTIME ?= win-arm64
	endif
else
	UNAME_S := $(shell uname -s)
	UNAME_P := $(shell uname -p)
	ifeq ($(UNAME_S),Linux)
		RUNTIME ?= linux-x64
	endif

	ifeq ($(UNAME_S),Darwin)
		ifeq ($(UNAME_P),x86_64)
			RUNTIME ?= osx.11.0-x64
		else
			RUNTIME ?= osx.11.0-arm64
		endif
	endif
endif


CONF = Release
OUT_DIR=$(PWD)
BIN_DIR = src/DusanMalusev/bin/Release/net6.0/$(RUNTIME)

.PHONY: build-prod
build-prod: restore
	@dotnet build -c $(CONF) --nologo --no-restore -p:MyRuntimeIdentifier=$(RUNTIME) -p:PublishReadyToRun=false

.PHONY: publish
publish: restore
	@dotnet publish -c $(CONF) --nologo --no-restore -p:MyRuntimeIdentifier=$(RUNTIME)
	@cd $(BIN_DIR) && tar -zcvf $(OUT_DIR)/DusanMalusev.tar.gz publish

.PHONY: migrate
migrate:
	@dotnet ef database update --project Database

.PHONY: restore
restore:
	@dotnet restore -r $(RUNTIME)

.PHONY: test
test:
	@ASPNETCORE_ENVIRONMENT=Testing dotnet test --no-restore -c $(CONF) --no-build --collect:"XPlat Code Coverage" /p:CollectCoverage=true /p:CoverletOutputFormat=opencover

.PHONY: drop
drop:
	@dotnet ef database drop --project Database --no-build

.PHONY: models-compiled
models-compiled:
	@dotnet ef dbcontext optimize --project Database

.PHONY: migration-bundle
migration-bundle:
	@cd src/Database && dotnet ef migrations bundle --project . --self-contained -f -o $(OUT_DIR)/efbundle --configuration $(CONF)

.PHONY: certificate
certificate:
	@openssl req -x509 -sha256 -nodes -days 365 \
		-newkey rsa:4096 \
		-keyout private.key \
		-config ./openssl.cnf \
		-out certificate.crt
	@openssl pkcs12 \
		-export -in certificate.crt -inkey private.key \
		-password pass:password123 \
		-aes256 \
		-out src/DusanMalusev/certificate.pfx
	@cp src/DusanMalusev/certificate.pfx tests/DusanMalusev.Tests/certificate.pfx
	@rm -f certificate.crt private.key

.PHONY: clean
clean:
	rm -rf DusanMalusev/Logs/
	dotnet clean -c $(CONF)
