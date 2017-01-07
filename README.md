# Development

## preparing

```bash
sudo npm -g install yarn
yarn
git worktree add bin/ gh-pages
```

## to compile

```bash
webpack --config webpack-node.config.js
node bin/parseGnu.js data/gnu-units.json
webpack
```

## to develop

```bash
webpack-dev-server --content-base bin
webpack --watch --config webpack-node.config.js
```

## to push

```bash
webpack
cd bin
git add -A
git commit -m'update binaries'
git push
```