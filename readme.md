# Colorize Console Log

> Spice up console.log in dev-tools

This lib is intended to be used in IntelliJ like editors, mostly WebStorm & PHPStorm. In order to optimize usage of this library, you should do some extra steps, so I gonna try to explain in the "Getting Started" section below.

## Getting started

Of course, you should install this library into your project so the first step should be as usual:

```
npm install colorize-console-log
```

or if you like it:
```
npm i colorize-console-log
```
###Usage

Import all that you need/like from lib. All of them is listed below:
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
now we need this (required) "varToBeShown..." variable. So library's method calls with JS on the very end of the name produce JSON.stringify output to console. You gonna know when you need them. Simple as that.
####Problem
Not so funny, isn't it? Pay attention to the spread operator in front of the function call, it is mandatory in order to get colorized console output actually. And yes, that is boring. I know, I know... The solution, at least in IntelliJ based editors should be:

- please open Settings/Preferences in your editor
- search for Live Templates
- choose JavaScript templates
- create a template for any of the listed methods
- give them some abbreviation, as you like
- paste next code in the Template text field
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

try to memorize your abbreviations and use them with joy.
In the Developer tools your brand new orange console.log masterpiece should look as:

![Screenshot](orange.jpg)

Nice one, isn't it?

Stay well. Thanks


