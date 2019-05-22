export const convert = (digits, from, to) => {
    if (from < 2 || !Number.isInteger(from)) {
        throw new Error('Wrong input base');
    }
    if (to < 2 || !Number.isInteger(to)) {
        throw new Error('Wrong output base');
    }
    // Special case of just requesting zero, which is zero in any base
    if (digits.length === 1 && digits[0] === 0) {
        return [0];
    }
    // If empty or first digit is zero (no left pad)
    if (digits.length === 0 || digits[0] === 0) {
        throw new Error('Input has wrong format');
    }

    // Calculate the value in base-10
    let value = 0;
    digits.reverse().forEach((item, index) => {
        if (item >= from || item < 0) {
            throw new Error('Input has wrong format');
        }
        value += item * from ** index;
    });

    // Figure out the max exponent for return
    let maxExp = 0;
    while (value % (to ** maxExp) !== value) {
        ++maxExp;
    }

    // Calculate in the to-base from base-10
    let result = [];
    do {
        --maxExp;

        if (value % (to ** maxExp) !== value) {
            let digit = value - value % (to ** maxExp);
            result.push(digit / (to ** maxExp));
            value -= digit;
        } else {
            // What remains is less than the spot, so just zero
            result.push(0);
        }

    } while (maxExp > 0);

    return result;
};
