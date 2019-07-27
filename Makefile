install: npm install

start:
	npx babel-node 'src/bin/games/brain-progression.js' 10

lint:
	npx eslint .

build:
	npm run build

publish:
	npm publish --dry-run

gitEmail:
	git config --local user.email "puchkova.anne@gmail.com"

gitName:
	git config --local user.name "annapuchkova"

rec:
	asciinema rec
