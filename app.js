// Aplicação principal
const app = {
    currentQuestion: 0,
    answers: {},
    recommendations: null,

    // Iniciar quiz
    startQuiz() {
        this.currentQuestion = 0;
        this.answers = {};
        this.showSection('quiz-section');
        this.renderQuestion();
    },

    // Renderizar pergunta atual
    renderQuestion() {
        const question = quizData.questions[this.currentQuestion];
        const quizContent = document.getElementById('quiz-content');
        
        // Atualizar barra de progresso
        const progress = ((this.currentQuestion + 1) / quizData.questions.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('progress-text').textContent = 
            `Pergunta ${this.currentQuestion + 1} de ${quizData.questions.length}`;

        // Renderizar conteúdo da pergunta
        let html = `
            <div class="question">
                <h3>${question.text}</h3>
                <div class="options">
        `;

        question.options.forEach((option, index) => {
            const isSelected = this.answers[this.currentQuestion] === option.value;
            html += `
                <div class="option ${isSelected ? 'selected' : ''}" 
                     onclick="app.selectOption(${index}, '${option.value}')">
                    ${option.text}
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;

        quizContent.innerHTML = html;

        // Atualizar botões
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (this.currentQuestion === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        if (this.currentQuestion === quizData.questions.length - 1) {
            nextBtn.textContent = 'Ver Resultados';
        } else {
            nextBtn.textContent = 'Próxima';
        }
    },

    // Selecionar opção
    selectOption(index, value) {
        this.answers[this.currentQuestion] = value;
        this.renderQuestion(); // Re-render para mostrar seleção
    },

    // Próxima pergunta
    nextQuestion() {
        if (this.answers[this.currentQuestion] === undefined) {
            alert('Por favor, selecione uma opção antes de continuar.');
            return;
        }

        if (this.currentQuestion < quizData.questions.length - 1) {
            this.currentQuestion++;
            this.renderQuestion();
        } else {
            this.showResults();
        }
    },

    // Pergunta anterior
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderQuestion();
        }
    },

    // Mostrar resultados
    showResults() {
        this.recommendations = calculateRecommendations(this.answers);
        this.showSection('results-section');
        this.renderResults();
    },

    // Renderizar resultados
    renderResults() {
        const resultsList = document.getElementById('results-list');
        let html = '';

        this.recommendations.forEach(rec => {
            const area = rec.area;
            const professions = area.professions.slice(0, 3); // Mostrar até 3 profissões

            html += `
                <div class="result-card">
                    <h3>${area.emoji} ${area.name}</h3>
                    <span class="compatibility">${rec.percentage}% de compatibilidade</span>
                    <p>${area.description}</p>
                    
                    <div class="profession-list">
            `;

            professions.forEach(prof => {
                html += `
                    <span class="profession-badge">${prof.name}</span>
                `;
            });

            html += `
                    </div>
                    
                    <button class="btn btn-primary" onclick="app.openProfessionModal('${area.id}')">
                        Saiba mais sobre as profissões
                    </button>
                </div>
            `;
        });

        resultsList.innerHTML = html;
    },

    // Abrir modal com detalhes da profissão
    openProfessionModal(areaId) {
        const area = professionsData.areas.find(a => a.id === areaId);
        const modal = document.getElementById('profession-modal');
        const modalBody = document.getElementById('modal-body');

        let html = `<h2>${area.emoji} ${area.name}</h2>`;
        
        area.professions.forEach(profession => {
            html += `
                <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid var(--border-color);">
                    <h3 style="color: var(--accent-green); font-size: 1.2rem; margin-bottom: 10px;">
                        ${profession.name}
                    </h3>
                    
                    <p style="margin-bottom: 15px; color: var(--accent-blue); font-weight: 600;">
                        💰 Salário: ${profession.salary}
                    </p>
                    
                    <p>${profession.description}</p>
                    
                    <div class="section-title">Responsabilidades Principais:</div>
                    <ul>
            `;
            
            profession.responsibilities.forEach(resp => {
                html += `<li>✓ ${resp}</li>`;
            });
            
            html += `
                    </ul>
                    
                    <div class="section-title">Requisitos e Habilidades:</div>
                    <ul>
            `;
            
            profession.requirements.forEach(req => {
                html += `<li>• ${req}</li>`;
            });
            
            html += `
                    </ul>
                    
                    <div class="section-title">Formação Necessária:</div>
                    <p>${profession.coursesNeeded}</p>
                </div>
            `;
        });

        modalBody.innerHTML = html;
        modal.classList.add('active');
    },

    // Fechar modal
    closeModal() {
        const modal = document.getElementById('profession-modal');
        modal.classList.remove('active');
    },

    // Resetar quiz
    resetQuiz() {
        this.currentQuestion = 0;
        this.answers = {};
        this.recommendations = null;
        this.showSection('welcome-section');
    },

    // Baixar resultados
    downloadResults() {
        let content = 'RESULTADOS DO MENTOR PROFISSIONAL\n';
        content += '================================\n\n';

        this.recommendations.forEach((rec, index) => {
            content += `${index + 1}. ${rec.area.emoji} ${rec.area.name}\n`;
            content += `   Compatibilidade: ${rec.percentage}%\n`;
            content += `   Descrição: ${rec.area.description}\n\n`;

            content += '   Profissões recomendadas:\n';
            rec.area.professions.forEach(prof => {
                content += `   - ${prof.name} (${prof.salary})\n`;
                content += `     ${prof.description}\n\n`;
            });
        });

        // Criar arquivo de download
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        element.setAttribute('download', 'resultados-mentor-profissional.txt');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    },

    // Mostrar seção
    showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }
};

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Fechar modal ao clicar fora dele
    const modal = document.getElementById('profession-modal');
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            app.closeModal();
        }
    });
});
