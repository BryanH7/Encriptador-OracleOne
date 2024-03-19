function procesarTexto() {
    let inTexto = document.getElementById('ingresarTexto').value.toLowerCase();
    let operacionTexto = document.getElementById('operacion').value;
    let resultado = '';

    if (operacionTexto === 'encrypto') {
      resultado = encriptarTexto(inTexto);
    } else {
      resultado = descencritarTexto(inTexto);
    }

    document.getElementById('resultado').innerText = resultado;
  }

  function encriptarTexto(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
  }

  function descencritarTexto(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
  }

  function copiarTexto() {
    let resTexto = document.getElementById('resultado').innerText;
    navigator.clipboard.writeText(resTexto)
      .then(() => {
        alert('¡Texto copiado al portapapeles!');
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
  }