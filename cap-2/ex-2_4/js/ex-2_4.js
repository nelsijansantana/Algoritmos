const frm = document.querySelector("form");
const resp = document.querySelector("#valorTotal");

frm.addEventListener("submit", (e) => {
    const precoQuilo = frm.precoQuilo.value;
    const consumo = frm.consumo.value;

    const precoConsumo = (precoQuilo / 1000) * consumo;

    resp.innerText = `Valor a pagar R$: ${precoConsumo.toFixed(2)}`;

    e.preventDefault();
});