const invoicingSP = 67836.43;
const invoicingRJ = 36678.66;
const invoicingMG = 29229.88;
const invoicingES = 27165.48;
const invoicingOthers = 19849.53;

const monthlyTotal = invoicingSP
+ invoicingRJ 
+invoicingMG 
+invoicingES 
+ invoicingOthers;

const percentualSP = (invoicingSP / monthlyTotal) * 100;
const percentualRJ = (invoicingRJ / monthlyTotal) * 100;
const percentualMG = (invoicingMG / monthlyTotal) * 100;
const percentualES = (invoicingES / monthlyTotal) * 100;
const percentualOthers = (invoicingOthers / monthlyTotal) * 100;

console.log("Percentual de representação por estado:");
console.log(`SP: ${percentualSP.toFixed(2)}%`);
console.log(`RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`MG: ${percentualMG.toFixed(2)}%`);
console.log(`ES: ${percentualES.toFixed(2)}%`);
console.log(`Outros: ${percentualOthers.toFixed(2)}%`);
