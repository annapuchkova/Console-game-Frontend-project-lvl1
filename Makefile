install: npm install

start:
	npx babel-node 'src/bin/brain-even.js' 10

lint:
	npx eslint .

build:
	npm run build

publish:
	npm publish