const nome = document.querySelector('#nome');
const ocupacao = document.querySelector('#ocupacao');
const telefone = document.querySelector('#telefone');
const button = document.querySelector('#gerar');

function gerar() {
    const cartaoExistente = document.querySelector('.cartao');
    if (cartaoExistente) {
        cartaoExistente.remove();
    }
    const pessoa = {
        nome: nome.value,
        ocupacao: ocupacao.value,
        telefone: telefone.value
    };
    if (!pessoa.nome || !pessoa.ocupacao || !pessoa.telefone) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const cartao = document.createElement('div');
    cartao.className = 'cartao';
    cartao.innerHTML = `
        <h2>${pessoa.nome}</h2>
        <p>Ocupação: ${pessoa.ocupacao}</p>
        <p>Telefone: ${pessoa.telefone}</p>
    `;
    nome.value = '';
    ocupacao.value = '';
    telefone.value = '';

    document.querySelector('main').appendChild(cartao);
}

button.addEventListener('click', gerar);