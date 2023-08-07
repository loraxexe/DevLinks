function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light');
}

function copyUser() {
    var copyText = document.getElementById('usuario').innerHTML;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(copyText).then(() => {
        console.log('Copying to clipboard was successful!');
      }).catch(err => {
        console.error('Could not copy text:', err);
      });
    } else {
      var textArea = document.createElement("textarea");
      textArea.value = copyText;
    
      // Evita rolagem para a parte inferior
      textArea.style.position = "fixed";
      textArea.style.opacity = "0"; // Torna o elemento invisível
    
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
    
      try {
        var successful = document.execCommand('copy');
        console.log('Fallback: Copying text command was ' + (successful ? 'successful' : 'unsuccessful'));
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
    
      document.body.removeChild(textArea);
    }
  }
  
  var button = document.getElementById("copy");
  button.addEventListener('click', copyUser);
  

