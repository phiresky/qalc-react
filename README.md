# Development

## preparing

```bash
sudo npm -g install yarn
yarn
git worktree add bin/ gh-pages
```

## to compile

```bash
webpack
```

## to develop

```bash
webpack-dev-server --content-base bin
```

## to push

```bash
webpack
cd bin
git add -A
git commit -m'update binaries'
git push
```