const roman = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
};

export const toRoman = (input = 0) => {
    let result = '';
    const keys = Object.keys(roman).reverse();
    while (input > 0) {
        keys.every(e => {
            if (Math.floor(input / e) > 0) {
                result += roman[e];
                input -= e;
                return false;
            }
            return true;
        })
    }
    return result;
};
