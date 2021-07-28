# dzongkha-numbers
A lightweight module to translate numbers from Arabic to dzongkha.

## Installation
```sh
npm i --save dzongkha-numbers
```

## API
```javascript
translateNumber(number)
```
### Arguments
> `number: number`: The input integer or float to convert.

### Returns
> `string`: The dzongkha representation of the input number.

## Usage
### JavaScript
```javascript
const translateNumber = require('dzongkha-numbers');
const integerValue = translateNumber(18041991);
console.log(integerValue); //Outputs: ༡༨༠༤༡༩༩༡
const floatValue = translateNumber(1804.91);
console.log(floatValue); //Outputs: ༡༨༠༤.༩༡
```
