export const validate = (input = 0) => {
    // Split into array of 1 length int
    const array = input.toString().split('');
    const length = input.toString().length;

    let total = 0;
    array.forEach(e => {
        total += e ** length;
    });

    return total === input;
};
