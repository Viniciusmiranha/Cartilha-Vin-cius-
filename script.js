// CONTADOR DE VISITAS
fetch('https://api.countapi.xyz/hit/cartilha-unip-seguranca/visitas')
  .then(res => res.json())
  .then(res => {
    document.getElementById('contador').innerText = res.value;
  })
  .catch(() => {
    document.getElementById('contador').innerText = "Erro ao carregar";
  });


// BOTÃO DO FORMULÁRIO
function abrirFormulario() {
  window.open("COLE_AQUI_LINK_DO_GOOGLE_FORMS", "_blank");
}
