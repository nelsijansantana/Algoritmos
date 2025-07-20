const prompt = require("prompt-sync")();
const salario = Number(prompt("Digite o salário: "));
const tempo = Number(prompt("Digite o tempo do funcionáio: "));

const quadrienio = Math.floor(tempo / 4);
const salarioAjuste = salario * 0.01 * 2;
const salarioFinal = salario + salarioAjuste;

console.log(
  `Salvario R$: ${salario}\nTempo (anos): ${tempo}\nQuadriênios: ${quadrienio}\nSalário final ${salarioFinal}`
);
