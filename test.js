import test from 'ava';
import {ConsoleGray, ConsoleGrayJS, ConsoleOrange, ConsoleOrangeJS} from './lib/colorize-console-log.js';


test('cgray-basic', ((test)=>{
  console.log(ConsoleGray('vidimo se console.log.gray'));
  test.pass();
}))

test('cgray-stringify', ((test)=>{
  console.log(ConsoleGrayJS('vidimo se console.log.gray json.stringify'));
  test.pass();
}))

test('corange-basic', ((test)=>{
  console.log(ConsoleOrange('vidimo se console.log.orange'));
  test.pass();
}))

test('corange-stringify', ((test)=>{
  console.log(ConsoleOrangeJS('vidimo se console.log.orange json.stringify'));
  test.pass();
}))

console.log(ConsoleOrange('hoce li ovako da ga okine'));