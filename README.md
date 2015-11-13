xdebugger provider for AngularJs
=================

[![Build Status](https://travis-ci.org/gonzalo123/ngXdebugger.svg?branch=master)](https://travis-ci.org/gonzalo123/ngXdebugger)

AngularJs provider to allow to debug PHP backends with xdebug.

## Example

Configure provider with default user language and some data
```js
    .config(function (xdebuggerProvider) {
            xdebuggerProvider.setKey('PHPSTORM');
        })
    })
```

## Installing via Bower 
```
bower install ng-xdebugger
```

Setting up included js files
```html
    <script src="lib/angular-cookies/angular-cookies.min.js"></script>
    <script src="lib/ng-xdebugger/dist/gonzalo123.xdebugger.min.js"></script>
```

## Development
It uses Karma to ensure the quality of the code. The easiest way to run these checks is to use grunt:

Install grunt-cli globally (If you haven't got already)
```sh
npm install -g grunt-cli
```

```sh
npm install && bower install
grunt karma
```
