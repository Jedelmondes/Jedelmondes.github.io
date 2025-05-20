document.addEventListener('DOMContentLoaded', () => {
    // ... código do menu hambúrguer ...
    // ... código do carrossel ...
    // ... código de animação ao rolar ...

    // Requisições para Carregar Conteúdo Dinamicamente
    const loadGamesBtn = document.getElementById('loadGamesBtn');
    const gamesListDiv = document.getElementById('gamesList');

    if (loadGamesBtn && gamesListDiv) {
        loadGamesBtn.addEventListener('click', () => {
            // Caminho para o seu arquivo JSON (simulando uma API)
            fetch('games.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao carregar os dados: ' + response.statusText);
                    }
                    return response.json();
                })
                .then(games => {
                    gamesListDiv.innerHTML = ''; // Limpa antes de adicionar
                    games.forEach(game => {
                        const gameElement = document.createElement('div');
                        gameElement.classList.add('game-item'); // Adicione um CSS para isso
                        gameElement.innerHTML = `
                            <h3>${game.name}</h3>
                            <p><strong>Console:</strong> ${game.console}</p>
                            <p>${game.description}</p>
                        `;
                        gamesListDiv.appendChild(gameElement);
                    });
                    loadGamesBtn.style.display = 'none'; // Esconde o botão após carregar
                })
                .catch(error => {
                    console.error('Houve um problema com a operação fetch:', error);
                    gamesListDiv.innerHTML = '<p style="color: red;">Erro ao carregar jogos. Tente novamente mais tarde.</p>';
                });
        });
    }
});