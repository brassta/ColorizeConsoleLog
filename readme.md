# Colorize Console Log

> Spice up console.log in dev-tools

This lib is intended to be used in IntelliJ like editors, mostly WebStorm & PHPStorm. In order to optimize usage of this library, you should do some extra steps, so I gonna try to explain in the "Getting Started" section below.

## Getting started

Of course you should install this library into your project so first step should be as usual:

```
npm install colorize-console-log
```

of if you like it:
```
npm i colorize-console-log
```
###Usage

Import what you need/like from lib. All of them is listed below:
```
import { ConsoleOrange, ConsoleOrangeJS, ConsoleGray, ConsoleGrayJS } from 'colorize-console-log'
```
You should call them as:
```javascript
Console.log(...ConsoleOrange('this one is message', var1, var2, var3))
```
var1, var2, var3 are optional, use as you need. Or:
```javascript
Console.log(...ConsoleOrangeJS('message of course', varToBeShownAsJsonString))
```
now we need this (required) "varToBeShown..." variable. So library's method calls with JS on very end of name produce JSON.stringify output to console. You gonna know when you need them. Simple as that.
####Problem
Not so funny, isn't it? Pay attention to spread operator in front of function call, it is mandatory in order to get colorized console output actually. And yes, that is boring. I know, I know... Solution, at least in IntellyJ based editors will be:

- open settings/preferences in your editor
- search for Live Templates
- chose Javascript templates
- create template for any of listed methods
- give them some abbrevation, you like
- paste next code in Template text 
```javascript
console.log(...ConsoleOrange('$MESSAGE$', $VALUE$));$END$
```
or
```javascript
console.log(...ConsoleOrangeJS('$MESSAGE$', $VALUE$));$END$
```
or
```javascript
console.log(...ConsoleGray('$MESSAGE$', $VALUE$));$END$
```
or finaly
```javascript
console.log(...ConsoleGray('$MESSAGE$', $VALUE$));$END$
```

try to memoize your abbrevations and use them with fun.
In developer tools your brand new orange console.log masterpiece should be look as

<p><img src="https://raw.githubusercontent.com/brassta/colorize-console-log/HEAD/lib/img/data.jpg" alt ="final image"/>neki paragraph</p>


Thanks

# unicorn-fun

> My awesome module

## Install

```
$ npm install unicorn-fun
```

## Usage

```js
import unicornFun from 'unicorn-fun';

unicornFun('unicorns');
//=> 'unicorns & rainbows'
```

## API

### unicornFun(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`\
Default: `rainbows`

Lorem ipsum.
