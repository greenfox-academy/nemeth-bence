'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

var j = ''

for(var i = 0; i < lineCount; i++){
  j += ('*'.repeat(lineCount));
  console.log(j);
}
