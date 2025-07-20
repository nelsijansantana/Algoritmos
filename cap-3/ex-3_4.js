const prompt = require("prompt-sync")();
const pesoRacao = Number(prompt("Peso da ração (KG): "));
const consumoDiario = Number(prompt("Consumo diário (gr): "));

const quiloParaGrama = pesoRacao * 1000;
const diasConsumo = Math.floor(quiloParaGrama / consumoDiario);
const sobra = quiloParaGrama % consumoDiario;

console.log(
  `Peso da ração (KG): ${pesoRacao}\nConsumo diário (gr): ${consumoDiario}\nDuração (Dias): ${diasConsumo}\nSobra (gr): ${sobra}`
);
