# Hosted Version

-   Calculator: https://phiresky.github.io/qalc-react/

-   Categorization Display: https://phiresky.github.io/qalc-react/ShowGnuUnitsTree.html
-   Categorize Tool: https://phiresky.github.io/qalc-react/GnuUnitsCategorizeHelper.html

# App

The website is installable and usable offline as an app. 

1. Go to https://phiresky.github.io/qalc-react on your mobile phone
2. You should get a prompt like this: ![Screenshot_20221216-135551_Trebuchet](https://user-images.githubusercontent.com/2303841/208103552-5b85efb3-0805-40e5-8dd7-83b0ac781d7d.png) If you don't, go to the dropdown menu and select "Install as app" or "Add to homescreen". The same works on Firefox.

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
