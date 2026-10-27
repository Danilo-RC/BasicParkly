const range = document.getElementById('precohoraselecao');
const valor = document.getElementById('precohoramostrar');

range.addEventListener('input', function () {
    valor.textContent = "R$ " + this.value;
});

const botoes = document.querySelectorAll('.button--category');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        if(!botao.classList.contains('button--category--all') && botao.classList.contains('button--category--active')) {
           botao.classList.remove('button--category--active'); 
        } else if (!botao.classList.contains('button--category--all')) {
            botao.classList.add('button--category--active');
        }
    });
});