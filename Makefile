all: bin/.git bin/index.html bin/bundle.js

bin/index.html: index.html
	cp $< $@
	patch bin/index.html < src/index-dist.patch

bin/qalc_data.txt: qalc_data.txt
	cp $< $@

bin/bundle.js: $(wildcard src/*)
	jspm build src/gui.tsx bin/bundle.js --dev

bin/.git:
	[ -f bin/.git ] || git worktree add bin/ gh-pages

gh-pages: all
	cd bin; git add -A; git commit -m'update binaries'; git push

.PHONY: gh-pages
