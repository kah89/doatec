all: lint build

deps:
	@yarn install --prod

dev-deps:
	@yarn install

build: dev-deps
	@yarn build
	@cp package.json dist

image:
	@docker build -t doatech .

lint: dev-deps
	@yarn lint
