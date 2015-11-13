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

## Development
It uses Karma to ensure the quality of the code. The easiest way to run these checks is to use grunt:

```sh
npm install -g grunt-cli
npm install && bower install
grunt karma
```
