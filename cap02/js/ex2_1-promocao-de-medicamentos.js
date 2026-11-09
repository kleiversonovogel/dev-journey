// cria ref ao form e ao h3
const frm = document.querySelector("form")
const respMedName = document.querySelector("#medName");
const respProm = document.querySelector("#prom");

// cria ouvinte

frm.addEventListener ("submit", (e) => {
 e.preventDefault();
const med = frm.med.value // obtem resposta do form
const price = Number(frm.price.value);

// promoçao
const promvalue = Math.floor(price * 2);

respMedName.innerText = `Promoção de ${med}!`
respProm.innerText = `Leve 2 por R$${promvalue.toFixed(2)}`

});