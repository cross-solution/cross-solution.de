[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/cross-solution/cross-solution.de)


# CROSS Solution

this is the quasar based https://cross-solution.de homepage. It depends on nodejs. You can install it by cloning the repo and
run yarn to install dependencies.

It contains a few forms that serve as prototypes for the Kickstarter [Lebenslauf Mamager](https://www.kickstarter.com/projects/yavik/manager-fur-lebenslaufe?lang=de).



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

optional: 

copy .env.example to .env and adjest the values.

if xou don't do it, login/register and social logins are not working.

Start in Single Page Appication (spa) development mode

```bash
yarn dev
```

Start in Server Side Render (ssr) development mode

```bash
yarn dev -m ssr
```


### Lint the files

```bash
yarn run lint
```

### Build the app for production

copy .env.example to .env.production and adjest the values.

```bash
yarn build
```

### start production

```bash
yarn serve
```

## Electron

you can build a standalone electon binary 

### Windows

```bash
yarn build-win32
```

### Mac

````bash
yarn build-mac
```

### Linux

````bash
yarn build-linux
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

our `.gitignore` contains a `statics/frankfurt-im-nebel-licensed.jpg`. You can set a `HEADER_IMAGE=statics/frankfurt-im-nebel-licensed.jpg` in you .env file to replace the header image. 
