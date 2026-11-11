const quests = [
            {
                category: "Lógica Básica",
                concept: "Um 'Algoritmo' é simplesmente uma sequência de instruções passo a passo para realizar uma tarefa ou resolver um problema. Assim como uma receita de bolo, o computador precisa saber a ordem exata do que fazer.",
                question: "Um 'Algoritmo' é como uma receita de bolo para o computador. O que isso significa?",
                options: [
                    { text: "É uma peça de hardware dentro do PC.", correct: false },
                    { text: "É um monstro que devora seus arquivos.", correct: false },
                    { text: "É um passo a passo com instruções para resolver um problema.", correct: true },
                    { text: "É a linguagem secreta da internet.", correct: false }
                ],
                success: "Exato! Algoritmos são passos lógicos. Você encontrou o caminho seguro."
            },
            {
                category: "Variáveis",
                concept: "Uma 'Variável' é como uma caixa mágica ou um baú onde você guarda informações (como números, textos ou status) para o computador lembrar e usar depois. O conteúdo dessa caixa pode mudar (variar) durante o jogo.",
                question: "Seu herói encontrou um baú e precisa guardar moedas. Na programação, o que usamos para 'guardar' informações?",
                options: [
                    { text: "Uma Variável", correct: true },
                    { text: "Um Loop", correct: false },
                    { text: "Uma Condição", correct: false },
                    { text: "Um Firewall", correct: false }
                ],
                success: "Correto! Variáveis são como caixas que armazenam dados, como suas moedas."
            },
            {
                category: "Condicionais (SE / SENÃO)",
                concept: "Estruturas condicionais (IF/ELSE) permitem que o programa tome decisões. É como dizer: 'SE estiver chovendo, abra o guarda-chuva. SENÃO, use óculos de sol'. O código só executa o que a condição permitir.",
                question: "Você está diante de uma porta de fogo. SE (tiver a poção de gelo) { abra a porta } SENÃO { fuja }. Você NÃO tem a poção. O que o herói faz?",
                options: [
                    { text: "Abre a porta e queima.", correct: false },
                    { text: "Foge.", correct: true },
                    { text: "Pede ajuda ao dragão.", correct: false },
                    { text: "Fica parado para sempre.", correct: false }
                ],
                success: "Muito bem! O 'SENÃO' (Else) é executado quando a condição do 'SE' (If) é falsa."
            },
            {
                category: "Laços de Repetição (Loops)",
                concept: "Os 'Loops' (ou Laços) servem para repetir a mesma ação várias vezes sem precisar escrever o código de novo. O programa fica rodando no laço até atingir o objetivo (como dar 10 passos).",
                question: "Para atravessar o corredor, o herói precisa dar 100 passos. Em vez de escrever 'dar passo' 100 vezes, qual recurso usamos?",
                options: [
                    { text: "Muitas variáveis", correct: false },
                    { text: "Condicional SE", correct: false },
                    { text: "Um Laço de Repetição (Loop / For / While)", correct: true },
                    { text: "Uma String", correct: false }
                ],
                success: "Perfeito! Loops fazem o computador repetir tarefas chatas por você."
            },
            {
                category: "Operadores Lógicos",
                concept: "Os Operadores Lógicos ligam várias condições. O operador 'E' (AND) exige que TODAS as condições sejam verdadeiras. O operador 'OU' (OR) exige que APENAS UMA seja verdadeira.",
                question: "Um baú mágico requer 2 coisas: A Chave Dourada E a Senha. Se você tiver apenas a Chave Dourada, o baú abre?",
                options: [
                    { text: "Sim, metade já basta.", correct: false },
                    { text: "Não. O operador 'E' (AND) exige que as DUAS condições sejam verdadeiras.", correct: true },
                    { text: "Sim, ele abre pela metade.", correct: false },
                    { text: "Ele explode.", correct: false }
                ],
                success: "Exato! Na lógica 'AND' (&&), tudo precisa ser verdadeiro."
            },
            {
                category: "Estruturas de Dados (Listas/Arrays)",
                concept: "Enquanto uma variável comum guarda uma só coisa, um 'Array' (ou Lista) é um organizador que guarda vários itens de uma vez. Cada item fica em uma posição numerada (índice), geralmente começando do zero.",
                question: "Seu inventário tem: [Espada, Escudo, Poção]. Na programação, como chamamos essa estrutura que guarda vários itens em ordem?",
                options: [
                    { text: "Uma Variável Solitária", correct: false },
                    { text: "Um Array (ou Lista)", correct: true },
                    { text: "Um Loop", correct: false },
                    { text: "Um Bug", correct: false }
                ],
                success: "Isso aí! Arrays usam posições numéricas (índices) para organizar itens."
            },
            {
                category: "Bugs e Erros",
                concept: "Um 'Bug' é quando o seu código tem um erro lógico ou de escrita, fazendo com que o programa não funcione do jeito esperado. O processo de encontrar e consertar o erro se chama 'Debug' (depuração).",
                question: "Seu feitiço falhou porque você esqueceu de fechar os parênteses no código. Como chamamos um erro na programação?",
                options: [
                    { text: "Glitch", correct: false },
                    { text: "Bug", correct: true },
                    { text: "Lag", correct: false },
                    { text: "Virus", correct: false }
                ],
                success: "Sim! 'Bugs' são erros na lógica ou sintaxe do seu código. É hora de debugar!"
            },
            {
                category: "Funções",
                concept: "Uma 'Função' é um bloco de código que tem um nome e resolve um problema específico. Você pode 'chamar' essa função quantas vezes quiser sem precisar reescrever as instruções que estão dentro dela.",
                question: "Você aprendeu o 'Golpe Triplo'. Em vez de dar três espadadas separadas, você usa o golpe inteiro de uma vez chamando seu nome. Na programação, isso é:",
                options: [
                    { text: "Um Banco de Dados", correct: false },
                    { text: "Uma Função (ou Procedimento)", correct: true },
                    { text: "Um Algoritmo Infinito", correct: false },
                    { text: "Uma Condicional", correct: false }
                ],
                success: "Incrível! Funções agrupam vários comandos para você reutilizar facilmente."
            },
            {
                category: "Matemática Lógica",
                concept: "As variáveis podem usar operadores matemáticos básicos (+, -, *, /). Na programação, dizemos que a variável recebe seu próprio valor mais alguma coisa para ser atualizada, como: Vida = Vida + 5.",
                question: "Vida = 10. Você bebeu uma poção. Vida = Vida + 5. Quanto de vida você tem agora?",
                options: [
                    { text: "5", correct: false },
                    { text: "15", correct: true },
                    { text: "105", correct: false },
                    { text: "0", correct: false }
                ],
                success: "Cálculo perfeito! As variáveis podem atualizar seus próprios valores usando matemática."
            },
            {
                category: "Desafio Final: O Boss",
                concept: "O 'While' (Enquanto) é um tipo de Loop que continua repetindo o código sem parar até que a condição imposta se torne falsa. Se não tomarmos cuidado, ele pode virar um 'loop infinito'!",
                question: "Enquanto (Boss.HP > 0) { Atacar(); } O que esse código significa?",
                options: [
                    { text: "O herói ataca uma vez e vai embora.", correct: false },
                    { text: "O herói não ataca se o Boss tiver vida.", correct: false },
                    { text: "O herói continua atacando repetidamente até a vida do Boss chegar a zero.", correct: true },
                    { text: "O herói morre.", correct: false }
                ],
                success: "Você dominou o 'While' Loop e derrotou o Boss Final!"
            }
        ];

        // --- BOARD MAP CONFIGURATION (Percentages X, Y) ---
        const pathNodes = [
            { x: 10, y: 85 }, // 0: Start
            { x: 30, y: 80 }, // 1
            { x: 50, y: 85 }, // 2
            { x: 75, y: 75 }, // 3
            { x: 85, y: 55 }, // 4
            { x: 65, y: 40 }, // 5
            { x: 45, y: 45 }, // 6
            { x: 20, y: 40 }, // 7
            { x: 15, y: 20 }, // 8
            { x: 50, y: 15 }  // 9: Boss (End)
        ];

        // --- GAME STATE ---
        let state = {
            currentNode: 0,
            hp: 3,
            maxHp: 3,
            xp: 0,
            maxXp: 100,
            isMoving: false
        };

        // --- DOM ELEMENTS ---
        const board = document.getElementById('board');
        const boardPath = document.getElementById('board-path');
        const player = document.getElementById('player');
        const hpContainer = document.getElementById('hp-container');
        const xpBar = document.getElementById('xp-bar');
        const xpText = document.getElementById('xp-text');
        const btnQuest = document.getElementById('btn-quest');

        // Modals
        const modalConcept = document.getElementById('modal-concept');
        const modalQuest = document.getElementById('modal-question');
        const modalFeedback = document.getElementById('modal-feedback');
        const modalEnd = document.getElementById('modal-endgame');

        // --- INITIALIZATION ---
        function initBoard() {
            // Draw SVG Path
            let pathD = `M ${pathNodes[0].x} ${pathNodes[0].y} `;
            
            // Create nodes and path
            pathNodes.forEach((node, index) => {
                if (index > 0) {
                    pathD += `L ${node.x} ${node.y} `;
                }

                // Create HTML node marker
                const el = document.createElement('div');
                el.classList.add('node');
                if (index === pathNodes.length - 1) {
                    el.classList.add('boss');
                    el.innerHTML = '🐉';
                } else {
                    el.innerHTML = index + 1;
                }
                el.style.left = `${node.x}%`;
                el.style.top = `${node.y}%`;
                el.id = `node-${index}`;
                board.appendChild(el);
            });

            boardPath.setAttribute('d', pathD);
            updatePlayerPosition();
            updateHUD();
        }

        // --- CORE FUNCTIONS ---
        function updatePlayerPosition() {
            const pos = pathNodes[state.currentNode];
            player.style.left = `${pos.x}%`;
            // Offset slightly up for aesthetic reasons so it sits ON the dot
            player.style.top = `calc(${pos.y}% - 15px)`;
            
            // Mark current node as completed
            if(state.currentNode > 0) {
                document.getElementById(`node-${state.currentNode - 1}`).classList.add('completed');
            }
        }

        function updateHUD() {
            // Update HP
            hpContainer.innerHTML = '';
            for (let i = 0; i < state.maxHp; i++) {
                if (i < state.hp) {
                    hpContainer.innerHTML += `<span class="heart">❤️</span>`;
                } else {
                    hpContainer.innerHTML += `<span class="heart empty">🖤</span>`;
                }
            }

            // Update XP
            const xpPercent = (state.xp / state.maxXp) * 100;
            xpBar.style.width = `${xpPercent}%`;
            xpText.innerText = `${state.xp}/${state.maxXp}`;
        }

        function startQuest() {
            if (state.hp <= 0 || state.currentNode >= pathNodes.length - 1) return;
            
            const quest = quests[state.currentNode];
            
            // Populate Concept Modal
            document.getElementById('c-category').innerText = quest.category;
            document.getElementById('c-number').innerText = `${state.currentNode + 1}/${pathNodes.length}`;
            document.getElementById('c-text').innerText = quest.concept;
            
            // Show Concept Modal
            modalConcept.classList.add('active');
        }

        function proceedToQuestion() {
            modalConcept.classList.remove('active');
            
            const quest = quests[state.currentNode];
            
            // Populate Question Modal
            document.getElementById('q-category').innerText = quest.category;
            document.getElementById('q-number').innerText = `${state.currentNode + 1}/${pathNodes.length}`;
            document.getElementById('q-text').innerText = quest.question;
            
            const optionsContainer = document.getElementById('q-options');
            optionsContainer.innerHTML = '';
            
            quest.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn text-left p-3 rounded font-medium flex gap-3 items-center';
                btn.innerHTML = `<span class="bg-slate-800 rounded-full min-w-[24px] h-6 flex items-center justify-center text-xs font-bold text-amber-400 border border-slate-600">${String.fromCharCode(65 + idx)}</span> <span>${opt.text}</span>`;
                btn.onclick = () => handleAnswer(opt.correct, quest.success);
                optionsContainer.appendChild(btn);
            });

            setTimeout(() => {
                modalQuest.classList.add('active');
            }, 300);
        }

        function handleAnswer(isCorrect, successText) {
            modalQuest.classList.remove('active');
            
            const title = document.getElementById('feedback-title');
            const desc = document.getElementById('feedback-desc');
            const icon = document.getElementById('feedback-icon');
            const content = modalFeedback.querySelector('.modal-content');

            if (isCorrect) {
                // Correct
                icon.innerText = '🌟';
                title.innerText = 'Correto!';
                title.className = 'fantasy-font text-3xl font-bold mb-2 text-emerald-400';
                desc.innerText = successText;
                content.style.borderColor = '#34d399';
                
                // Gain XP and move
                state.xp += 10;
                state.currentNode++;
                updatePlayerPosition();
            } else {
                // Wrong
                icon.innerText = '💥';
                title.innerText = 'Armadilha Lógica!';
                title.className = 'fantasy-font text-3xl font-bold mb-2 text-red-500';
                desc.innerText = 'Você perdeu 1 ponto de vida. Revise o conceito e tente na próxima vez!';
                content.style.borderColor = '#ef4444';
                
                // Lose HP
                state.hp--;
            }

            updateHUD();
            
            // Show Feedback after a tiny delay for smoothness
            setTimeout(() => {
                modalFeedback.classList.add('active');
            }, 300);
        }

        function closeFeedback() {
            modalFeedback.classList.remove('active');
            
            // Check end game conditions
            setTimeout(() => {
                if (state.hp <= 0) {
                    showEndGame(false);
                } else if (state.currentNode === pathNodes.length - 1) {
                    showEndGame(true);
                    document.getElementById(`node-${state.currentNode}`).classList.add('completed');
                }
            }, 300);
        }

        function showEndGame(isVictory) {
            const title = document.getElementById('end-title');
            const desc = document.getElementById('end-desc');
            
            if (isVictory) {
                title.innerText = '🏆 Vitória!';
                title.className = 'fantasy-font text-5xl font-bold mb-4 text-amber-400';
                desc.innerText = `Incrível! Você dominou os fundamentos da programação, derrotou o Dragão Bugado e conquistou ${state.xp} XP. Você agora é um Mestre da Lógica!`;
                btnQuest.style.display = 'none';
            } else {
                title.innerText = '☠️ Fim de Jogo';
                title.className = 'fantasy-font text-5xl font-bold mb-4 text-red-600';
                desc.innerText = 'Seus pontos de vida acabaram. O código ficou cheio de bugs. Mas não desista, todo grande programador aprende errando!';
                btnQuest.style.display = 'none';
            }
            
            modalEnd.classList.add('active');
        }

        function resetGame() {
            modalEnd.classList.remove('active');
            state.currentNode = 0;
            state.hp = state.maxHp;
            state.xp = 0;
            
            // Reset node visuals
            document.querySelectorAll('.node').forEach(n => n.classList.remove('completed'));
            
            updatePlayerPosition();
            updateHUD();
            btnQuest.style.display = 'block';
        }

        // Start
        window.onload = () => {
            initBoard();
        };