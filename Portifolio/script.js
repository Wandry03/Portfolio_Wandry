document.addEventListener("DOMContentLoaded"), function () {
      const header = document.querySelector("header");
      setTimeout(() => {
        header.style.transition = "opacity 1s ease-in-out";
        header.style.opacity = 1;
      }, 100);

      const btnEmail = document.getElementById('btn-email');
      btnEmail.addEventListener('click', () => {
        window.location.href = "mailto:nuneswandry59@gmail.com?subject=Contato%20do%20site&body=Olá,%20estava%20observando%20seu%20site,%20podemos%20conversar?";
      });

      <button onclick="abrirWhatsApp()">WhatsApp</button>
    }
    function abrirWhatsApp() {
      const numero = "5538998070033";
      const mensagem = "Olá, estava observando seu site, podemos conversar?";
      const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
      window.open(link, "_blank");
    }