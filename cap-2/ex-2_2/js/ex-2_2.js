const frm = document.querySelector("form");
const respNomeFilme = document.querySelector("#nomeFilme");
const respTempo = document.querySelector("#duracaoTotal");

frm.addEventListener("submit", (e) => {
  const inFilme = frm.inFilme.value;
  const inHora = Number(frm.duracaoMinutos.value);

  //Calcula minuto em hora
  const duracaoHora = Math.floor(inHora / 60);
  const duracaoMinutos = inHora % 60;

  respNomeFilme.innerText = `${inFilme}`;
  respTempo.innerText = `${duracaoHora} hora(s) e ${duracaoMinutos} minuto(s)`;
  e.preventDefault();
});
