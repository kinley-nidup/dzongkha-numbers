# dzongkha-numbers
A lightweight module to convert numbers from Arabic to bhutanses numbers.

## Installation
```sh
npm i --save dzongkha-numbers
```

## API
```javascript
translateNumber(number)
```
Converts the input number into Japanese characters.

### Arguments
> `number: number`: The input integer or float to convert. **down**.

### Returns
> `string`: The dzongkha representation of the input number.

## Usage
### JavaScript
```javascript
const convertNumber = require('dzongkha-numbers');
const integerValue = translateNumber(18041991);
console.log(integerValue); //Outputs: ༡༨༠༤༡༩༩༡
const floatValue = translateNumber(1804.91);
console.log(floatValue); //Outputs: ༡༨༠༤.༩༡
```
