const nome = document.querySelector('#nome');
const ocupacao = document.querySelector('#ocupacao');
const telefone = document.querySelector('#telefone');
const button = document.querySelector('#gerar');

function gerar() {
    const cartaoExistente = document.querySelector('.cartao');
    if (cartaoExistente) {
        cartaoExistente.remove();
    }
    const nomeValue = nome.value;
    const ocupacaoValue = ocupacao.value;
    const telefoneValue = telefone.value;

    if (!nomeValue || !ocupacaoValue || !telefoneValue) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const cartao = document.createElement('div');
    cartao.className = 'cartao';
    cartao.innerHTML = `
        <h2>${nomeValue}</h2>
        <p>Ocupação: ${ocupacaoValue}</p>
        <p>Telefone: ${telefoneValue}</p>
    `;
    nome.value = '';
    ocupacao.value = '';
    telefone.value = '';

    document.querySelector('main').appendChild(cartao);
}

button.addEventListener('click', gerar);