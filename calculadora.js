// Obtener elementos del DOM
const form = document.querySelector('form');
const historialLista = document.getElementById('historial-lista');

// Función para agregar un elemento al historial
function agregarAlHistorial(operacion, num1, num2, resultado) {
  const li = document.createElement('li');
  li.innerHTML = `${num1} ${operacion} ${num2} = ${resultado}`;
  historialLista.appendChild(li);
}

// Función para calcular el resultado de la operación
function calcular(operacion, num1, num2) {
  switch (operacion) {
    case 'sumar':
      return num1 + num2;
    case 'restar':
      return num1 - num2;
    case 'multiplicar':
      return num1 * num2;
    case 'dividir':
      return num1 / num2;
    default:
      return NaN;
  }
}

// Manejar el envío del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Obtener los valores de los campos
  const operacion = form.operacion.value;
  const num1 = Number(form.num1.value);
  const num2 = Number(form.num2.value);
  
  // Calcular el resultado
  const resultado = calcular(operacion, num1, num2);
  
  // Mostrar el resultado en un mensaje de alerta
  if (isNaN(resultado)) {
    alert('Operación no válida');
  } else {
    alert(`El resultado es: ${resultado}`);
    
    // Agregar la operación al historial
    agregarAlHistorial(operacion, num1, num2, resultado);
    
    // Limpiar los campos del formulario
    form.reset();
  }
});
