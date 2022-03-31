# sum-any 

This is a simple library for summing any array `[1, 4, 2, 3]` or any type object arrays
### example
```json
    [
      {
	....
	"name: "Apple",
    	"price": 120
      },
      {
	....
	"name":"Mango",
    	"price": 234
      },
      ...
    ]
```
## Install

`npm install --save sum-any`
# Usage
### sumArray
This method sums an array that could be an array.
```javascript
const {sumArray} = require('sum-any');

const arr = [1, 2, 3, 4];

const sum = sumArray(arr);

console.log(sum);
/*
10
*/
```
Using object array:
```javascript
const {sumArrayObject} = require('sum-any');

const objArray = [
      {
        "name": "Apple 🍎",
        "price": 80
      },
      {
        "name": "Mango 🥭",
        "price": 40
      },
	  {
        "name": "Kiwi 🥝",
        "price": 50
      }
    ];
    

const sum = sumArrayObject(objArray, "price");

console.log(sum);
/*
170
*/
```


## Usage
### sumArray
This method sums an array that could be an array.
```javascript
const {sumArray} = require('sum-any');

const arr = [1, 2, 3, 4];

const sum = sumArray(arr);

console.log(sum);
/*
10
*/
```
### Using object array:
```javascript
const {sumArrayObject} = require('sum-any');

const objArray = [
      {
        "name": "Apple 🍎",
        "price": 80
      },
      {
        "name": "Mango 🥭",
        "price": 40
      },
	  {
        "name": "Kiwi 🥝",
        "price": 50
      }
    ];
    

const sum = sumArrayObject(objArray, "price");

console.log(sum);
/*
170
*/
```
### Sum object array of dynamic keys with specific index:
```javascript
const {sumArrayObjectIndex} = require('sum-any');

const objArray = [
      {
        "iPhone": 3000,
      },
      {
        "samsung": 3560,
      },
	  {
        "lg": 5654,
      }
    ];
    

const sum = sumArrayObjectIndex(objArray, 0);

console.log(sum);
/*
170
*/
```

## License
MIT

