//declaro variables, utlizo arrays para declarar los nombres de las divisas y el valor de cada una en valor al dólar
let monedas = ['Elige tu moneda', 'Dólar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina','ARS'];
let fragmentIn = document.createDocumentFragment();
let fragmentOut = document.createDocumentFragment();
let myList = document.getElementById('ingresoDivisa');
let myOtherList = document.getElementById('salidaDivisa');
let resultadoEl = document.getElementById('resultado');
let valorMonedasEnDolar = [0, 1, 20.5035, 3784.89, 0.86098, 0.73613,214];

//utilizo forEach para ingresar las opciones de elección de divisa
monedas.forEach(item => {
  let optionIn = document.createElement('option');
  optionIn.textContent = item;
  fragmentIn.appendChild(optionIn);

  let optionOut = document.createElement('option');
  optionOut.textContent = item;
  fragmentOut.appendChild(optionOut);

});

myList.appendChild(fragmentIn);
myOtherList.appendChild(fragmentOut);

//declaro variables y utilizo el botón convertir
let convertir = document.getElementById('convierte');

let loginForm = document.getElementById('form');
loginForm.addEventListener("submit", calcularConversion);

//cumple la función del conversor de divisas, previene mandar el submit a otra página, recibe todos los valores ingresados
function calcularConversion(e) {
  e.preventDefault();

  let formData = new FormData(e.target);
  let formValues = Object.fromEntries(formData);
  let cantidad = parseFloat(formValues.dinero);
  let ingresoDivisa = formValues.ingresoDivisa;
  let salidaDivisa = formValues.salidaDivisa;

//anuncia si ingresó números o letras y escribe el resultado de la conversión
  if (isNaN(cantidad) == true) {
    resultadoEl.setAttribute('value', "La cantidad ingresada no es válida");
    resultadoEl.setAttribute('style', "background-color: red;");
  } else {
    if (chequearDivisa(ingresoDivisa) && chequearDivisa(salidaDivisa)) {
      const resultado = convertirDivisa(cantidad, ingresoDivisa, salidaDivisa);
      resultadoEl.setAttribute('value', resultado);
      resultadoEl.setAttribute('style', "background-color: white;");
    } else {
      return;
    }
  }
}

//función que se asegura de que se eliga una divisa
function chequearDivisa(divisa) {
  if (divisa == monedas[0]) {
    alert('Elige una divisa válida');
    return false;
  }
  return true;
}

//conversiones
function convertirDivisa(cantidad, ingresoDivisa, salidaDivisa) {
  switch (ingresoDivisa) {
    // Ingreso dolar
    case monedas[1]:
      if (salidaDivisa === monedas[1])
        return cantidad;
      else if (salidaDivisa === monedas[2])
        return cantidad * valorMonedasEnDolar[2];
      else if (salidaDivisa === monedas[3])
        return cantidad * valorMonedasEnDolar[3];
      else if (salidaDivisa === monedas[4])
        return cantidad * valorMonedasEnDolar[4];
      else if (salidaDivisa === monedas[5])
        return cantidad * valorMonedasEnDolar[5];
      else if (salidaDivisa === monedas[6])
        return cantidad * valorMonedasEnDolar[6];

      // Ingreso Peso Mex
    case monedas[2]:
      if (salidaDivisa === monedas[1])
        return cantidad / valorMonedasEnDolar[2];
      else if (salidaDivisa === monedas[2])
        return cantidad;
      else if (salidaDivisa === monedas[3])
        return cantidad * (valorMonedasEnDolar[3] / valorMonedasEnDolar[2]);
      else if (salidaDivisa === monedas[4])
        return cantidad * (valorMonedasEnDolar[4] / valorMonedasEnDolar[2]);
      else if (salidaDivisa === monedas[5])
        return cantidad * (valorMonedasEnDolar[5] / valorMonedasEnDolar[2]);
      else if (salidaDivisa === monedas[6])
        return cantidad * (valorMonedasEnDolar[6] / valorMonedasEnDolar[2]);

      // Ingreso Peso Col
    case monedas[3]:
      if (salidaDivisa === monedas[1])
        return cantidad / valorMonedasEnDolar[3];
      else if (salidaDivisa === monedas[2])
        return cantidad * (valorMonedasEnDolar[2] / valorMonedasEnDolar[3]);
      else if (salidaDivisa === monedas[3])
        return cantidad;
      else if (salidaDivisa === monedas[4])
        return cantidad * (valorMonedasEnDolar[4] / valorMonedasEnDolar[3]);
      else if (salidaDivisa === monedas[5])
        return cantidad * (valorMonedasEnDolar[5] / valorMonedasEnDolar[3]);
      else if (salidaDivisa === monedas[6])
        return cantidad * (valorMonedasEnDolar[6] / valorMonedasEnDolar[3]);

      // Ingreso Euro
    case monedas[4]:
      if (salidaDivisa === monedas[1])
        return cantidad / valorMonedasEnDolar[4];
      else if (salidaDivisa === monedas[2])
        return cantidad * (valorMonedasEnDolar[2] / valorMonedasEnDolar[4]);
      else if (salidaDivisa === monedas[3])
        return cantidad * (valorMonedasEnDolar[3] / valorMonedasEnDolar[4]);
      else if (salidaDivisa === monedas[4])
        return cantidad;
      else if (salidaDivisa === monedas[5])
        return cantidad * (valorMonedasEnDolar[5] / valorMonedasEnDolar[4]);
      else if (salidaDivisa === monedas[6])
        return cantidad * (valorMonedasEnDolar[6] / valorMonedasEnDolar[4]);

      // Ingreso Libras
    case monedas[5]:
      if (salidaDivisa === monedas[1])
        return cantidad / valorMonedasEnDolar[5];
      else if (salidaDivisa === monedas[2])
        return cantidad * (valorMonedasEnDolar[2] / valorMonedasEnDolar[5]);
      else if (salidaDivisa === monedas[3])
        return cantidad * (valorMonedasEnDolar[3] / valorMonedasEnDolar[5]);
      else if (salidaDivisa === monedas[4])
        return cantidad * (valorMonedasEnDolar[4] / valorMonedasEnDolar[5]);
      else if (salidaDivisa === monedas[5])
        return cantidad;
      else if (salidaDivisa === monedas[6])
        return cantidad * (valorMonedasEnDolar[6] / valorMonedasEnDolar[5]);
      return cantidad;

      // Ingreso ARS
      case monedas[6]:
        if (salidaDivisa === monedas[1])
          return cantidad / valorMonedasEnDolar[6];
        else if (salidaDivisa === monedas[2])
          return cantidad * (valorMonedasEnDolar[2] / valorMonedasEnDolar[6]);
        else if (salidaDivisa === monedas[3])
          return cantidad * (valorMonedasEnDolar[3] / valorMonedasEnDolar[6]);
        else if (salidaDivisa === monedas[4])
          return cantidad * (valorMonedasEnDolar[4] / valorMonedasEnDolar[6]);
        else if (salidaDivisa === monedas[5])
          return cantidad * (valorMonedasEnDolar[5] / valorMonedasEnDolar[6]);
        else if (salidaDivisa === monedas[6])
          return cantidad;
        return cantidad;


    }
}
