const frm = document.querySelector("form");
const resp1 = document.querySelector("#modeloVeiculo");
const resp2 = document.querySelector("#valorEntrada");
const resp3 = document.querySelector("#parcelas");

frm.addEventListener("submit", (e) => {
    const nomeVeiculo = frm.nomeVeiculo.value;
    const precoTotal = frm.precoTotal.value;

    const valorEntrada = precoTotal * 0.50;
    const precoParcelas = (precoTotal - valorEntrada) / 12;

    resp1.innerText = `Promoção: ${nomeVeiculo}`;
    resp2.innerText = `Entrada de R$ ${valorEntrada}`;
    resp3.innerText = `+12x de R$ ${precoParcelas.toFixed(2)}`;
    e.preventDefault();
});