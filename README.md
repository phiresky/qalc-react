# Hosted Version

* Calculator: https://phiresky.github.io/qalc-react/

* Categorization Display: https://phiresky.github.io/qalc-react/gnuTest.html
* Categorize Tool: https://phiresky.github.io/qalc-react/GnuUnitsCategorizeHelper.html

# Development

## preparing

```bash
sudo npm -g install yarn
yarn
git checkout gh-pages && git checkout master
git worktree add bin/ gh-pages
```

## to compile

```bash
yarn run parse-gnu-units
yarn run build
```

## to develop

Run webpack-dev-server using

```bash
yarn run dev
```

## to push

```bash
yarn run build
cd bin
git add -A
git commit -m'update binaries'
git push
```
