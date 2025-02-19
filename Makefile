install:
	npm ci

gendiff:
	node bin/gendiff.js

run:
	node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json 

publish:
	npm publish --dry-run