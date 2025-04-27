// Função para abrir o modal
function abrirModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Função para mudar o fundo da página com transição
function mudarFundo() {
    document.body.style.transition = 'background 0.5s ease';
    document.body.style.background = `radial-gradient(circle, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)})`;
}

// Função para exibir alerta com texto dinâmico
function exibirAlerta(texto) {
    alert(texto || 'Nenhum texto de alerta fornecido!');
}

// Adicionar eventos aos botões
document.getElementById('botao-modal').addEventListener('click', abrirModal);
document.getElementById('botao-fechar').addEventListener('click', fecharModal);
document.getElementById('botao-mudar-fundo').addEventListener('click', mudarFundo);
document.getElementById('botao-alerta').addEventListener('click', () => {
    const textoAlerta = document.getElementById('modal').dataset.textoAlerta || 'Texto padrão';
    exibirAlerta(textoAlerta);
});

// Fechar o modal ao clicar fora do conteúdo
document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        fecharModal();
    }
});
