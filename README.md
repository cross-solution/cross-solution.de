# CROSS Solution

this is the quasar based https://cross-solution.de homepage. It depends on nodejs. You can install it by cloning the repo and
run yarn to install dependencies.

## Requirements

to contribute, you need:

- [git](https://git-scm.com/)
- [nodejs](https://nodejs.org) > 10

## Installation

clone repo an install dependencies

```bash
git clone https://github.com/cross-solution/cross-solution.de.git
cd cross-solution.de
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
yarn dev:ssr
```

### Lint the files

```bash
yarn run lint
```

### Build the app for production

```bash
yarn build
```

### start production

it's propably better to use pm2 for production. But we're currently starting the production site by :

```bash
cd /srv/cross-solution/current
node_modules/.bin/quasar dev --port=3001 --hostname=localhost -m ssr
```

## Contribut

you can add yourself to our [Team](https://cross-solution.de/about) by sending us a PR. Team ist currently locates in
https://github.com/cross-solution/cross-solution.de/blob/master/src/pages/about.vue#L53. Feel free to make it better.

### Setting up VSCode editor to lint/auto format vue/js/html files

See [this gist](https://gist.github.com/TiSiE/be6c4bce0a939fb4c906d5fb4e729760)


# Copyright 

MIT

except:
* src/statics/frankfurt-im-nebel.jpg

