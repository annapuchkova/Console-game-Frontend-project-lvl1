install: npm install

start:
	npx babel-node 'src/bin/games/brain-calc.js' 10

lint:
	npx eslint .

build:
	npm run build

publish:
	npm publish --dry-run