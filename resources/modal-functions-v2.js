console.log('Carregando modal-functions-v3.js');

// Função para abrir o modal
function abrirModal() {
    console.log('Tentando abrir modal');
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'flex';
        console.log('Modal aberto');
    } else {
        console.error('Elemento #modal não encontrado');
    }
}

// Função para fechar o modal
function fecharModal() {
    console.log('Tentando fechar modal');
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        console.log('Modal fechado');
    }
}

// Função para mudar o fundo
function mudarFundo() {
    console.log('Mudando fundo');
    document.body.style.transition = 'background 0.5s ease';
    document.body.style.background = `radial-gradient(circle, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)})`;
}

// Função para exibir alerta
function exibirAlerta(texto) {
    console.log('Exibindo alerta:', texto);
    alert(texto || 'Texto padrão');
}

// Adicionar eventos
console.log('Adicionando eventos aos botões');
const botaoModal = document.getElementById('botao-modal');
if (botaoModal) {
    botaoModal.addEventListener('click', abrirModal);
    console.log('Evento de clique adicionado ao botao-modal');
} else {
    console.error('Elemento #botao-modal não encontrado');
}

const botaoFechar = document.getElementById('botao-fechar');
if (botaoFechar) {
    botaoFechar.addEventListener('click', fecharModal);
}

const botaoMudarFundo = document.getElementById('botao-mudar-fundo');
if (botaoMudarFundo) {
    botaoMudarFundo.addEventListener('click', mudarFundo);
}

const botaoAlerta = document.getElementById('botao-alerta');
if (botaoAlerta) {
    botaoAlerta.addEventListener('click', () => {
        const textoAlerta = document.getElementById('modal')?.dataset.textoAlerta || 'Texto padrão';
        exibirAlerta(textoAlerta);
    });
}

const modal = document.getElementById('modal');
if (modal) {
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            fecharModal();
        }
    });
}
