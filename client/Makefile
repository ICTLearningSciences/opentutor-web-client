.env.development:
	@echo "DIALOG_ENDPOINT=https://dev-opentutor.pal3.org/dialog/" >> .env.development
	@echo "Set up  a default .env.development file"
	@echo "that configures DIALOG_ENDPOINT=https://dev-opentutor.pal3.org/dialog/."
	@echo "This file should not be committed. "
	@echo "Feel free to change to point to a local server if you're running one."

.PHONY: clean
clean:
	rm -rf .cache public node_modules

.PHONY: develop
develop: .env.development node_modules/gatsby-cli
	npx gatsby develop

.PHONY: pretty
pretty:
	cd .. && $(MAKE) pretty
	
.PHONY: format
format:
	cd .. && $(MAKE) format

.PHONY: license
license:
	cd .. && $(MAKE) license

node_modules/eslint:
	npm ci

node_modules/gatsby-cli:
	npm ci

node_modules/typescript:
	npm ci


PHONY: test-all
test-all:
	#$(MAKE) test-audit
	$(MAKE) test-format
	$(MAKE) test-lint
	$(MAKE) test-types

.PHONY: test-audit
test-audit:
	npm run test:audit

.PHONY: test-format
test-format:
	cd .. && $(MAKE) test-format

.PHONY: test-license
test-license:
	cd .. && $(MAKE) test-license

.PHONY: test-lint
test-lint: node_modules/eslint
	npm run test:lint

.PHONY: test-types
test-types: node_modules/typescript
	npm run test:types

