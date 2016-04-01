all: bin/.git bin/index.html bin/bundle.js

bin/index.html: index.html
	cp $< $@
	patch bin/index.html < src/index-dist.patch

bin/bundle.js: $(wildcard src/*) $(wildcard data/*)
	jspm build src/gui.tsx bin/bundle.js --dev

data/units_data.txt: src/parse-gnu-units.js
	node --harmony --harmony_destructuring --harmony_default_parameters  src/parse-gnu-units.js > data/units_data.txt

bin/.git:
	[ -f bin/.git ] || git worktree add bin/ gh-pages

gh-pages: all
	cd bin; git add -A; git commit -m'update binaries'; git push

.PHONY: gh-pages
