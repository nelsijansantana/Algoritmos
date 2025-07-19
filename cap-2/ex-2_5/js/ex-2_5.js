const frm = document.querySelector("form");
const outRes1 = document.querySelector("#resultadoMedicamento");
const outRes2 = document.querySelector("#promoMedicamento");

frm.addEventListener("submit", (e) => {
    const nomeMedicamento = frm.medicamento.value;
    const precoMedicamento = Number(frm.precoMedicamento.value);

    outRes1.innerText = `Promoção de ${nomeMedicamento}`;
    outRes2.innerText = `Leve 2 por ${Math.floor(precoMedicamento)}`;
    e.preventDefault();
});