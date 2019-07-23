install: npm install

start:
	npx babel-node 'src/bin/brain-games.js' 10

lint:
	npx eslint .

build:
	npm run-script build

publish:
	npm publish --dry-run