SELF_CONTAINED ?= 0
RUNTIME ?= osx.11.0-x64
.PHONY: build-prod
build-prod:
ifeq ($(SELF_CONTAINED), 1)
	dotnet build --self-contained true -c Release --nologo --no-restore -r $(RUNTIME)  -p:PublishReadyToRun=true
else
	dotnet build -c Release --nologo --no-restore
endif

publish:
ifeq ($(SELF_CONTAINED), 1)
	dotnet publish --self-contained true -c Release --nologo --no-restore -r $(RUNTIME)  -p:UseAppHost=false  -p:PublishReadyToRun=true
else
	dotnet publish -c Release --nologo --no-restore -p:UseAppHost=false
endif

.PHONY: migration-bundle
migration-bundle:
	cd Database && dotnet ef migrations bundle --project . --self-contained true -f --target-configuration Release
