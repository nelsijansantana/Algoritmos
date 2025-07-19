const frm = document.querySelector("form");
const valorTotal = document.querySelector("#valorTotal");

/* frm.addEventListener("submit", (e) => {
  const precoQuinze = frm.valorQuinze.value;
  const totalDeUso = frm.tempoDeUso.value;

  const totalMinuto = precoQuinze / 15;
  const tempoUso = totalDeUso * totalMinuto;

  valorTotal.innerText = `Valor a Pagar R$: ${tempoUso}`;
  e.preventDefault();
});
*/

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const precoQuinze = frm.valorQuinze.value;
  const totalDeUso = frm.tempoDeUso.value;

  const fracaoQuinze = (totalDeUso / 15 );
  const tempoFinal = Math.ceil(fracaoQuinze);
  const precoFinal = precoQuinze * tempoFinal;
  valorTotal.innerText = `Valor a Pagar R$: ${precoFinal}`;
});
