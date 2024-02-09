const billingDiary = require("./dados.json");

// Menor valor faturado
function calculateMinorBilling(billingDiary) {
    let smaller = Infinity;
    for (let i = 0; i < billingDiary.length; i++) {
        if (billingDiary[i].valor < smaller && billingDiary[i].valor !== 0) {
            smaller = billingDiary[i].valor;
        }
    }
    return smaller;
}

// Maior valor faturado
function calculateHighestBilling(billingDiary) {
    let bigger = 0;
    for (let i = 0; i < billingDiary.length; i++) {
        if (billingDiary[i].valor > bigger) {
            bigger = billingDiary[i].valor;
        }
    }
    return bigger;
}

// Média mensal
function calculateMediaBilling(billingDiary) {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < billingDiary.length; i++) {
        if (billingDiary[i].valor !== 0) {
            sum += billingDiary[i].valor;
            result++;
        }
    }
    return sum / result;
}

// Dias acima da média
function calculateDaysAboveAverage(
    billingDiary) {
    const average = calculateMediaBilling(billingDiary);
    let result = 0;
    for (let i = 0; i < billingDiary.length; i++) {
        if (billingDiary[i].valor > average) {
            result++;
        }
    }
    return result;
}

// Testando
console.log("Menor valor de faturamento:", calculateMinorBilling(billingDiary));
console.log("Maior valor de faturamento:", calculateHighestBilling(billingDiary));
console.log("Número de dias com faturamento acima da média:", calculateDaysAboveAverage(billingDiary));

