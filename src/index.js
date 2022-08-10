module.exports = function toReadable (number) {
    const PRIMES = 0;
    const TEENS = 1;
    const DOZENS = 2;
    const DIGITS = {
        0: ['zero','ten','zero'],
        1: ['one','eleven','one'],
        2: ['two','twelve','twen'],
        3: ['three','thirteen','thir'],
        4: ['four','fourteen','for'],
        5: ['five','fifteen','fif'],
        6: ['six','sixteen','six'],
        7: ['seven','seventeen','seven'],
        8: ['eight','eighteen','eigh'],
        9: ['nine','nineteen','nine']
    }

    if (number === 0) {
        return DIGITS[0][PRIMES];
    }

    let hundred = Math.floor(number / 100);
    let dozens = number % 100;
    let dozen = Math.floor(dozens / 10);
    let digit = dozens % 10;

    let resultsArr = [];

    if (hundred) {
        resultsArr.push(`${DIGITS[hundred][PRIMES]} hundred`);
    } 
    
    if (dozens > 19) {
        resultsArr.push(`${DIGITS[dozen][DOZENS]}ty`);
    }

    if (dozens >= 10 && dozens <= 19) {
        resultsArr.push(`${DIGITS[digit][TEENS]}`);
    }

    if (digit && !(dozens > 10 && dozens <= 20)) {
        resultsArr.push(`${DIGITS[digit][PRIMES]}`);
    }

    return resultsArr.join(' ');
}
