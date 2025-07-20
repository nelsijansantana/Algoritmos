const prompt = require("prompt-sync")();
const nomeVeiculo = prompt("Digite o nome do veículo: ");
const precoVeiculo = Number(prompt("Digite o valor do veículo: "));

const precoEntrada = precoVeiculo * 0.5;
const precoParcelas = (precoVeiculo - precoEntrada) / 12;

console.log(`Promoção: ${nomeVeiculo}\nEntrada de R$ ${precoEntrada}\n+12x de R$ ${precoParcelas.toFixed(2)}`);
