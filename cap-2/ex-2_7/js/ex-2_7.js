const frm = document.querySelector("form");
const out1 = document.querySelector("#leveTres");
const out2 = document.querySelector("#promo");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inNomeProduto = frm.produto.value;
  let inValorProduto = frm.valorProduto.value;

  const descontoProduto = inValorProduto * 0.5;
  const precoTotal = (inValorProduto * 2) + descontoProduto;

  out1.innerText = `${inNomeProduto} - Promoção: Leve 3 por: ${precoTotal}`;
  out2.innerText = `O Terceiro produto custa apenas: R$: ${descontoProduto}`;
});
