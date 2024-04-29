function validarFormulario() {
    
    let numeroA = parseFloat(document.getElementById('numero1').value);
    let numeroB = parseFloat(document.getElementById('numero2').value);

    if (numeroB <= numeroA) {
      alert('FORMULÁRIO NÃO FOI VALIDADO, POIS O VALOR DO NÚMERO 2 É MENOR QUE O VALOR DO NÚMERO 1');
      return false; 
    }
  
      alert('FORMULÁRIO VALIDADO E ENVIADO');
    return true;
  }
  
 
  let form = document.getElementById('Validador');
  form.addEventListener('submit', function(event) {
    if (!validarFormulario()) {
      alert('TENTE NOVAMENTE'); 
    }
  });