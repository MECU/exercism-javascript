export function translate(input)
{
    let output = [];
    input = typeof input === "undefined" ? '' : input;

    // Split the input into 3 char bits into an array, or give me an empty array
    const sequence = input.match(/.{3}/g) || [];

    sequence.every(item => {
        switch (item) {
            case 'UAA':
            case 'UAG':
            case 'UGA':
                return false;
            case 'AUG':
                output.push('Methionine');
                return true;
            case 'UUU':
            case 'UUC':
                output.push('Phenylalanine');
                return true;
            case 'UUA':
            case 'UUG':
                output.push('Leucine');
                return true;
            case 'UCU':
            case 'UCC':
            case 'UCA':
            case 'UCG':
                output.push('Serine');
                return true;
            case 'UAU':
            case 'UAC':
                output.push('Tyrosine');
                return true;
            case 'UGU':
            case 'UGC':
                output.push('Cysteine');
                return true;
            case 'UGG':
                output.push('Tryptophan');
                return true;
            default:
                throw new Error('Invalid codon');
        }
    });

    return output;
}
