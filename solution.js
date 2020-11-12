/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    function rangeCheck(num) {
        if (num > 2147483648 || num < -2147483648) {
        return 0
        } else {
            return num
        }
    }
    let stringX = x.toString()
    let numArr = stringX.split('')
    if (numArr[0] != '-') {
        numArr.reverse()
        let reverseString = numArr.join('')
        
        let revserseNum = parseInt(reverseString)
        return rangeCheck(revserseNum)
    } else {
        numArr.shift()
        numArr.reverse()
        numArr.unshift('-')
        let reverseString = numArr.join('')
        
        let revserseNum = parseInt(reverseString)
        return rangeCheck(revserseNum)
    }
    
    
};