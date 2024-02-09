let number = 0;

function verifyFibonacci(number) {
    let number1 = 0;
    let number2 = 1;

    for (let i = 0; i <= number; i++) {
        if (number1 === number) {
            return true;
        }
        let currentValue = number2;
        number2 = number1 + number2;
        number1 = currentValue;
    }

    return false;
}


number = 5;
number = 7;
number = 21;
number = 56;
number = 10;
number = 38;

if (verifyFibonacci(number)) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
}
        