let dolarBtn = document.querySelector("#dolar");

let euroBtn = document.querySelector("#euro");

let resultado = document.querySelector("#resultado");

dolarBtn.addEventListener('click', function() {
  let valor = document.querySelector("#valor").value;

  let resultDolar = valor * 5.53;
  
  let limpar = document.querySelector("#limpar");
  
  let tituloDolar = document.createTextNode(valor + "R$ convertido em dólar é igual a " + resultDolar.toFixed(2) + "$");
  resultado.appendChild(tituloDolar);
  
  limpar.style.cssText= "display: block";
  
  limpar.addEventListener('click', function () {
    location.reload();
  });
});

euroBtn.addEventListener('click', function() {
  let valor = document.querySelector("#valor").value;
  
  let resultEuro = valor * 6.32;
  
  let limpar = document.querySelector("#limpar");
  
  let tituloEuro = document.createTextNode(valor + "R$ convertido em euro é igual a " + resultEuro.toFixed(2) + "€");
  
  resultado.appendChild(tituloEuro);
  
  limpar.style.cssText= "display: block";
  
  limpar.addEventListener('click', function () {
    location.reload();
  });
});

