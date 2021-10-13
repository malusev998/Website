RUNTIME ?= osx-x64
CONF = Release
OUT_DIR=$(PWD)
BIN_DIR = DusanMalusev/bin/Release/net6.0/$(RUNTIME)

.PHONY: build-prod
build: restore
	@dotnet build -c $(CONF) --nologo --no-restore -p:MyRuntimeIdentifier=$(RUNTIME) -p:PublishReadyToRun=false

.PHONY: publish
publish: restore
	@dotnet publish -c $(CONF) --nologo --no-restore -p:MyRuntimeIdentifier=$(RUNTIME) -p:PublishReadyToRun=false
	@cd $(BIN_DIR) && tar -zcvf $(OUT_DIR)/DusanMaluser.tar.gz publish
.PHONY: migrate
migrate:
	@dotnet ef database update --project Database

.PHONY: restore
restore:
	@dotnet restore -r $(RUNTIME)

.PHONY: drop
drop:
	@dotnet ef database drop --project Database --no-build

.PHONY: models-compiled
models-compiled:
	@dotnet ef dbcontext optimize --project Database

.PHONY: migration-bundle
migration-bundle:
	@cd Database && dotnet ef migrations bundle --project . --self-contained true -f --target-configuration $(CONF)

.PHONY: certificate
certificate:
	@openssl req -x509 -sha256 -nodes -days 365 \
		-newkey rsa:4096 \
		-keyout private.key \
		-out certificate.crt
	@openssl pkcs12 \
		-export -in certificate.crt -inkey private.key \
		-out DusanMalusev/certificate.pfx
	@rm -f certificate.crt private.key

.PHONY: clean
clean:
	rm -rf DusanMalusev/Logs/
	dotnet clean -c Debug
	dotnet clean -c $(CONF)
