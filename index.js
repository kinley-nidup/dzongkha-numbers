/**
 * Converts arabic integers or floats into bhutanese numbers.
 * @param {*} number 
 * @returns 
 */
const translateNumber = (number) => {
    /* check if parameter is a valid number */
    if (typeof number != 'number' || isNaN(number)) {
        return 'Not a valid number'
    }
    let translatedValue = '';

    /* check if number is integer or float. if number is a float, need to take care of the decimal places */
    if (Number.isInteger(number)) {
        translatedValue = processConversionToDzongkha(number);
    } else {

        /* number is a float. so find the index of the decimal point by converting the number to string */
        let castToString = number.toString();
        let decimalPosition = castToString.indexOf('.')
        /* remove the decimal point from the number  */
        let numberWithoutDecimal = castToString.replace('.', '')
        let convertedNumber = processConversionToDzongkha(numberWithoutDecimal);
        //insert the decimal point at the position extracted from the actual number
        translatedValue = [convertedNumber.slice(0, decimalPosition), '.', convertedNumber.slice(decimalPosition)].join('')
    }

    return translatedValue;
}

/**
 * 
 * @param {*} number 
 */
const processConversionToDzongkha = (number) => {
    /* variable that will hold the converted value */
    let dzongkhaDigit = ''
    /* define all the numbers in dzongkha and store it in an array to its respective array index */
    const dzongkhaNumbers = ['༠', '༡', '༢', '༣', '༤', '༥', '༦', '༧', '༨', '༩']
    /* convert number to string and create an array from the string. */
    const castedToArray = Array.from(number.toString())
    /* loop the array and return the dzongkha eqivalent number by the elements index. */
    castedToArray.forEach(element => {
        dzongkhaDigit += dzongkhaNumbers[element]
    });

    return dzongkhaDigit;
}

module.exports = translateNumber