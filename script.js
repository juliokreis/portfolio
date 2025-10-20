        function enviarWhats(event) {
            event.preventDefault()

            const nome = document.getElementById('nome').value;
            const mensagem = document.getElementById('mensagem').value;
            const telefone = '5561991965150'; // Substitua pelo seu número de WhatsApp com código do país

            const textoMensagem = `Olá, meu nome é ${nome}. ${mensagem}`
            const msgFormatada = encodeURIComponent(textoMensagem);

            const urlWhatsApp = `https://wa.me/${telefone}?text=${msgFormatada}`

            window.open(urlWhatsApp, '_blank')
        }