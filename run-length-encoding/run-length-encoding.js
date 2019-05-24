export function encode(input)
{
    let output = '';
    let lastChar = '';
    let count = 0;

    input.split('').forEach(e => {
        if (e === lastChar) {
            // The char is the same, so just keep on truckin'
            ++count;
            return;
        }
        // The char is not the same, so we need to add it
        if (count === 0) {
            // Special case for the first time, just set the lastChar and add and go
            lastChar = e;
            ++count;
            return;
        }

        output += addNumberIfMoreThanOneAndChar(count, lastChar);

        // Setup for next char
        lastChar = e;
        count = 1;
    });

    output += addNumberIfMoreThanOneAndChar(count, lastChar);

    return output;
}

function addNumberIfMoreThanOneAndChar(count, char)
{
    let output = '';
    if (count > 1) {
        output += count;
    }
    output += char;
    return output;
}

export function decode(input)
{
    let output = '';
    let counter = '';

    input.split('').forEach(e => {
        // If it's a number, add it to the counter
        if (!isNaN(Number(e)) && e !== ' ') {
            counter += e;
            return;
        }

        output += e.repeat(counter || 1);
        counter = '';
    });

    return output;
}
