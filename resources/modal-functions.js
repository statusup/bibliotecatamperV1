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

// Adicionar eventos aos botões
document.getElementById('botao-modal').addEventListener('click', abrirModal);
document.getElementById('botao-fechar').addEventListener('click', fecharModal);

// Fechar o modal ao clicar fora do conteúdo
document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        fecharModal();
    }
});