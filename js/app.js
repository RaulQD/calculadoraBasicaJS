const displayOneEl = document.querySelector('#display-1');
const btnNumeros = document.querySelectorAll('.numero');
const btnOperador = document.querySelectorAll('.operador');
const deleteAllNum = document.querySelector('#delete');
const deleteNum = document.querySelector('#back');
const btnIgual = document.querySelector('.igual');
let operActual = '';
let operAnterior = ''; 
let operador = undefined;

//EVENTOS


btnNumeros.forEach(boton =>{
  boton.addEventListener('click', () =>{
    agregarNumeros(boton.innerText);
  });
});
btnOperador.forEach(boton => {
  boton.addEventListener('click', () =>{
    seleccionarOperador(boton.innerText);
  });
});

btnIgual.addEventListener('click', () =>{
  calcular();
  actualizarDisplay();
});

deleteAllNum.addEventListener('click', () => {
  limpiar();
  actualizarDisplay();
});

function agregarNumeros(num){
  operActual = operActual.toString() +  num.toString();
  actualizarDisplay()
}
function seleccionarOperador(op){
  if(operActual === '') return;
  if(operAnterior !== ''){
    calcular();
  }
  operador = op.toString();
  operAnterior = operActual;
  operActual = '';
  
}
function calcular(){
  let calcular;
  const anterior = parseFloat(operAnterior);
  const actual = parseFloat(operActual);
  if(isNaN(anterior) || isNaN(actual)) return;
  switch(operador){
    case '+':
      calcular = anterior + actual;
      break;
    case '-':
      calcular = anterior - actual;
      break;
    case '/':
      calcular = anterior / actual; 
      break;
    case 'x':
      calcular = anterior * actual;  
      break;
    default:
      return;
  }
  operActual = calcular;
  operAnterior = '';
  operador = undefined;
}

function limpiar(){
  operActual = '';
  operAnterior = '';
  operador = undefined;
}
function actualizarDisplay(){
 displayOneEl.innerText = operActual;
 
}
limpiar();