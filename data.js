// Dados do questionário
const quizData = {
    questions: [
        {
            id: 1,
            text: "Qual dessas atividades mais te atrai?",
            options: [
                { text: "Resolver problemas complexos e lógicos", value: "analyticalLogical" },
                { text: "Trabalhar com arte, design ou criatividade", value: "creative" },
                { text: "Ajudar e se comunicar com outras pessoas", value: "interpersonal" },
                { text: "Trabalhar com números e dados", value: "analytical" }
            ]
        },
        {
            id: 2,
            text: "Como você se descreve melhor?",
            options: [
                { text: "Inovador e pensador fora da caixa", value: "innovative" },
                { text: "Prático e focado em resultados", value: "practical" },
                { text: "Empático e preocupado com o bem-estar dos outros", value: "empathetic" },
                { text: "Curioso e sempre aprendendo", value: "curious" }
            ]
        },
        {
            id: 3,
            text: "Qual tipo de ambiente de trabalho você prefere?",
            options: [
                { text: "Ambiente dinâmico e com novos desafios", value: "dynamic" },
                { text: "Ambiente colaborativo em equipe", value: "collaborative" },
                { text: "Trabalho focado e concentrado", value: "focused" },
                { text: "Liberdade para trabalhar de forma autônoma", value: "autonomous" }
            ]
        },
        {
            id: 4,
            text: "Qual dessas áreas de conhecimento mais interessa você?",
            options: [
                { text: "Ciências Exatas (Matemática, Física, Química)", value: "exact" },
                { text: "Tecnologia e Programação", value: "technology" },
                { text: "Artes, Humanities e Comunicação", value: "arts" },
                { text: "Saúde, Bem-estar e Ciências Humanas", value: "health" }
            ]
        },
        {
            id: 5,
            text: "O que você valoriza mais em uma carreira?",
            options: [
                { text: "Ganhos financeiros e estabilidade", value: "financial" },
                { text: "Fazer diferença no mundo", value: "impact" },
                { text: "Criatividade e expressão pessoal", value: "selfExpression" },
                { text: "Flexibilidade e equilibrio trabalho-vida", value: "flexibility" }
            ]
        },
        {
            id: 6,
            text: "Como você se sente com ambientes estruturados e regras?",
            options: [
                { text: "Prefiro estrutura e clareza de normas", value: "structured" },
                { text: "Gosto de flexibilidade com algumas diretrizes", value: "semiStructured" },
                { text: "Prefiro ambientes criativos e sem muitas limitações", value: "flexible" },
                { text: "Me adapto bem a qualquer situação", value: "adaptive" }
            ]
        },
        {
            id: 7,
            text: "Qual tipo de tarefa você gosta mais de realizar?",
            options: [
                { text: "Analisar dados e encontrar padrões", value: "analysis" },
                { text: "Criar algo novo e inovador", value: "creation" },
                { text: "Ensinar e orientar outras pessoas", value: "teaching" },
                { text: "Gerenciar projetos e organizar equipes", value: "management" }
            ]
        },
        {
            id: 8,
            text: "Como você se relaciona com a tecnologia?",
            options: [
                { text: "Sou muito familiarizado e gosto de inovação tech", value: "techSavvy" },
                { text: "Uso tecnologia sem problemas, mas não é meu foco", value: "techComfortable" },
                { text: "Prefiro trabalhos mais tradicionais", value: "techIndifferent" },
                { text: "Gosto de aprender novas tecnologias", value: "techLearner" }
            ]
        },
        {
            id: 9,
            text: "Qual é seu maior ponto forte?",
            options: [
                { text: "Pensamento crítico e análise", value: "criticalThinking" },
                { text: "Criatividade e imaginação", value: "creativity" },
                { text: "Empatia e inteligência emocional", value: "empathy" },
                { text: "Organização e planejamento", value: "organization" }
            ]
        },
        {
            id: 10,
            text: "Imagine-se em 10 anos. O que seria sucesso para você?",
            options: [
                { text: "Ser reconhecido por inovações na minha área", value: "innovation" },
                { text: "Ter estabilidade financeira e segurança", value: "security" },
                { text: "Ter ajudado muitas pessoas", value: "contribution" },
                { text: "Ser autossuficiente e independente", value: "independence" }
            ]
        }
    ]
};

// Dados de áreas profissionais e profissões
const professionsData = {
    areas: [
        {
            id: 'technology',
            name: 'Tecnologia e Desenvolvimento',
            emoji: '💻',
            description: 'Trabalha com programação, desenvolvimento de sistemas, aplicativos e soluções tecnológicas.',
            skills: ['Lógica de programação', 'Resolução de problemas', 'Criatividade técnica', 'Trabalho em equipe'],
            professions: [
                {
                    id: 'developer',
                    name: 'Desenvolvedor de Software',
                    salary: 'R$ 4.000 - R$ 12.000+',
                    description: 'Profissional que cria, desenvolve e mantém programas e aplicativos para computadores, celulares e web.',
                    responsibilities: [
                        'Escrever código em linguagens de programação',
                        'Debugar e corrigir erros',
                        'Colaborar com equipes de design e product',
                        'Manter e atualizar sistemas existentes'
                    ],
                    requirements: ['Conhecimento de linguagens de programação', 'Pensamento lógico', 'Inglês'],
                    coursesNeeded: 'Engenharia de Software, Ciência da Computação, cursos de programação'
                },
                {
                    id: 'webdeveloper',
                    name: 'Desenvolvedor Web',
                    salary: 'R$ 3.000 - R$ 10.000+',
                    description: 'Especialista em criar sites e aplicações web usando HTML, CSS, JavaScript e frameworks modernos.',
                    responsibilities: [
                        'Criar interfaces de usuário responsivas',
                        'Implementar funcionalidades interativas',
                        'Otimizar performance de websites',
                        'Garantir compatibilidade em diferentes navegadores'
                    ],
                    requirements: ['HTML, CSS, JavaScript', 'Conhecimento de frameworks', 'Design responsivo'],
                    coursesNeeded: 'Desenvolvimento Web, cursos de Front-end/Back-end'
                },
                {
                    id: 'datascientist',
                    name: 'Cientista de Dados',
                    salary: 'R$ 6.000 - R$ 15.000+',
                    description: 'Profissional que analisa grandes volumes de dados para gerar insights e apoiar decisões empresariais.',
                    responsibilities: [
                        'Coletar e processar dados',
                        'Criar modelos de análise e previsão',
                        'Visualizar dados em dashboards',
                        'Comunicar resultados para stakeholders'
                    ],
                    requirements: ['Python, R', 'Estatística e Matemática', 'SQL', 'Análise crítica'],
                    coursesNeeded: 'Ciência de Dados, Estatística, Análise de Dados'
                }
            ]
        },
        {
            id: 'design',
            name: 'Design e Criatividade',
            emoji: '🎨',
            description: 'Trabalha com criação visual, design gráfico, UX/UI e desenvolvimento de identidades visuais.',
            skills: ['Criatividade', 'Sensibilidade estética', 'Comunicação visual', 'Ferramentas de design'],
            professions: [
                {
                    id: 'uxdesigner',
                    name: 'Designer UX/UI',
                    salary: 'R$ 3.500 - R$ 10.000+',
                    description: 'Cria experiências digitais intuitivas e visualmente atraentes para aplicativos e websites.',
                    responsibilities: [
                        'Pesquisar necessidades dos usuários',
                        'Criar wireframes e protótipos',
                        'Desenhar interfaces visuais',
                        'Testes de usabilidade e iteração'
                    ],
                    requirements: ['Ferramentas de design (Figma, Adobe XD)', 'Pensamento centrado no usuário', 'Comunicação'],
                    coursesNeeded: 'Design UX/UI, Interação Humano-Computador'
                },
                {
                    id: 'graphicdesigner',
                    name: 'Designer Gráfico',
                    salary: 'R$ 2.500 - R$ 8.000+',
                    description: 'Profissional que cria elementos visuais para marcas, publicidades, materiais impressos e digitais.',
                    responsibilities: [
                        'Criar logos e identidades visuais',
                        'Desenvolver campanhas publicitárias',
                        'Diagramar materiais impressos',
                        'Trabalhar com fotografia e ilustração'
                    ],
                    requirements: ['Adobe Creative Suite', 'Criatividade', 'Senso de estética'],
                    coursesNeeded: 'Design Gráfico, Artes Visuais, Publicidade'
                },
                {
                    id: 'animator',
                    name: 'Animador/Ilustrador',
                    salary: 'R$ 2.000 - R$ 8.000+',
                    description: 'Cria animações, ilustrações e conteúdo visual para filmes, séries, jogos e publicidade.',
                    responsibilities: [
                        'Desenhar e animar personagens',
                        'Criar storyboards',
                        'Trabalhar com softwares de animação',
                        'Colaborar em produções audiovisuais'
                    ],
                    requirements: ['Desenho', 'Conhecimento de animação', 'Softwares como Blender, After Effects'],
                    coursesNeeded: 'Animação, Artes Digitais, Cinema'
                }
            ]
        },
        {
            id: 'business',
            name: 'Negócios e Administração',
            emoji: '💼',
            description: 'Trabalha com gestão empresarial, empreendedorismo, finanças e administração de recursos.',
            skills: ['Liderança', 'Pensamento estratégico', 'Análise de negócios', 'Comunicação'],
            professions: [
                {
                    id: 'projectmanager',
                    name: 'Gerente de Projetos',
                    salary: 'R$ 5.000 - R$ 12.000+',
                    description: 'Responsável por planejar, executar e controlar projetos dentro de prazos e orçamentos.',
                    responsibilities: [
                        'Definir objetivos e escopo do projeto',
                        'Gerenciar equipes e recursos',
                        'Monitorar progresso e riscos',
                        'Comunicar com stakeholders'
                    ],
                    requirements: ['Liderança', 'Organização', 'Conhecimento de metodologias Agile/Scrum'],
                    coursesNeeded: 'Administração, Gestão de Projetos, MBA'
                },
                {
                    id: 'entrepreneur',
                    name: 'Empreendedor',
                    salary: 'Variável (R$ 0 - sem limite)',
                    description: 'Cria e desenvolve seus próprios negócios, inovando e assumindo riscos calculados.',
                    responsibilities: [
                        'Identificar oportunidades de mercado',
                        'Desenvolver modelos de negócio',
                        'Gerenciar finanças e operações',
                        'Liderar equipes e crescer a empresa'
                    ],
                    requirements: ['Criatividade', 'Iniciativa', 'Resiliência', 'Conhecimento de mercado'],
                    coursesNeeded: 'Administração, Economia, Empreendedorismo'
                },
                {
                    id: 'analyst',
                    name: 'Analista de Negócios',
                    salary: 'R$ 4.000 - R$ 10.000+',
                    description: 'Analisa processos empresariais e identifica melhorias para aumentar eficiência e lucros.',
                    responsibilities: [
                        'Coletar e analisar dados de negócios',
                        'Identificar problemas e oportunidades',
                        'Criar relatórios e apresentações',
                        'Propor soluções e acompanhar implementação'
                    ],
                    requirements: ['Análise crítica', 'Excel avançado', 'Comunicação', 'Conhecimento de BI'],
                    coursesNeeded: 'Administração, Gestão, Análise de Dados'
                }
            ]
        },
        {
            id: 'health',
            name: 'Saúde e Bem-estar',
            emoji: '⚕️',
            description: 'Trabalha com cuidados de saúde, bem-estar mental e físico das pessoas.',
            skills: ['Empatia', 'Paciência', 'Conhecimento científico', 'Comunicação compaixiva'],
            professions: [
                {
                    id: 'psychologist',
                    name: 'Psicólogo',
                    salary: 'R$ 3.000 - R$ 8.000+',
                    description: 'Profissional que estuda o comportamento humano e ajuda pessoas a lidar com problemas emocionais.',
                    responsibilities: [
                        'Realizar avaliações psicológicas',
                        'Conduzir terapia e aconselhamento',
                        'Desenvolver planos de tratamento',
                        'Pesquisar e educar sobre saúde mental'
                    ],
                    requirements: ['Empatia', 'Capacidade de escuta', 'Conhecimento de psicologia'],
                    coursesNeeded: 'Psicologia, Pós-graduação em especialidades'
                },
                {
                    id: 'nurse',
                    name: 'Enfermeiro',
                    salary: 'R$ 2.500 - R$ 7.000+',
                    description: 'Profissional de saúde que cuida de pacientes, monitora condições e auxilia médicos.',
                    responsibilities: [
                        'Cuidar de pacientes',
                        'Administrar medicamentos',
                        'Monitorar sinais vitais',
                        'Educar pacientes sobre saúde'
                    ],
                    requirements: ['Empatia', 'Atenção ao detalhe', 'Resistência física'],
                    coursesNeeded: 'Enfermagem, Técnico em Enfermagem'
                },
                {
                    id: 'nutritionist',
                    name: 'Nutricionista',
                    salary: 'R$ 2.500 - R$ 7.000+',
                    description: 'Especialista em nutrição que cria planos alimentares para melhorar a saúde das pessoas.',
                    responsibilities: [
                        'Avaliar estado nutricional',
                        'Criar planos nutricionais personalizados',
                        'Orientar sobre alimentação saudável',
                        'Acompanhar evolução do paciente'
                    ],
                    requirements: ['Conhecimento de nutrição', 'Empatia', 'Comunicação'],
                    coursesNeeded: 'Nutrição, Dietética'
                }
            ]
        },
        {
            id: 'education',
            name: 'Educação e Treinamento',
            emoji: '📚',
            description: 'Trabalha com ensino, capacitação e desenvolvimento de pessoas através da educação.',
            skills: ['Comunicação', 'Paciência', 'Criatividade pedagógica', 'Liderança'],
            professions: [
                {
                    id: 'teacher',
                    name: 'Professor',
                    salary: 'R$ 2.000 - R$ 6.000+',
                    description: 'Profissional que ensina e educa alunos em diferentes disciplinas e níveis educacionais.',
                    responsibilities: [
                        'Planejar aulas e curriculos',
                        'Ensinar conteúdo',
                        'Avaliar aprendizado dos alunos',
                        'Motivar e orientar estudantes'
                    ],
                    requirements: ['Comunicação clara', 'Paciência', 'Conhecimento da disciplina'],
                    coursesNeeded: 'Licenciatura em Educação, Pedagogia'
                },
                {
                    id: 'trainer',
                    name: 'Instrutor/Treinador',
                    salary: 'R$ 2.500 - R$ 7.000+',
                    description: 'Capacita profissionais em novas habilidades e conhecimentos dentro de empresas ou instituições.',
                    responsibilities: [
                        'Desenvolver programas de treinamento',
                        'Ministrar cursos e workshops',
                        'Avaliar aprendizado',
                        'Acompanhar desenvolvimento profissional'
                    ],
                    requirements: ['Comunicação', 'Didática', 'Conhecimento técnico'],
                    coursesNeeded: 'Pedagogia, Treinamento e Desenvolvimento'
                },
                {
                    id: 'instructionaldesigner',
                    name: 'Designer Instrucional',
                    salary: 'R$ 3.500 - R$ 9.000+',
                    description: 'Cria materiais e estratégias educacionais para ensino a distância e presencial.',
                    responsibilities: [
                        'Desenvolver conteúdo educacional',
                        'Criar cursos online',
                        'Usar tecnologia para educação',
                        'Avaliar efetividade do aprendizado'
                    ],
                    requirements: ['Criatividade', 'Conhecimento de tecnologia educacional', 'Comunicação'],
                    coursesNeeded: 'Pedagogia, Designer Instrucional, Educação Digital'
                }
            ]
        },
        {
            id: 'engineering',
            name: 'Engenharia e Construção',
            emoji: '🏗️',
            description: 'Trabalha com projetos, construção, infraestrutura e soluções técnicas de grande escala.',
            skills: ['Pensamento lógico', 'Matemática', 'Resolução de problemas', 'Precisão'],
            professions: [
                {
                    id: 'civlengineer',
                    name: 'Engenheiro Civil',
                    salary: 'R$ 4.000 - R$ 12.000+',
                    description: 'Projeta, constrói e mantém infraestruturas como prédios, pontes, estradas e sistemas de água.',
                    responsibilities: [
                        'Fazer projetos estruturais',
                        'Calcular resistência e segurança',
                        'Supervisionar construções',
                        'Garantir conformidade com normas'
                    ],
                    requirements: ['Matemática avançada', 'CAD', 'Conhecimento de materiais'],
                    coursesNeeded: 'Engenharia Civil'
                },
                {
                    id: 'softengineer',
                    name: 'Engenheiro de Software',
                    salary: 'R$ 5.000 - R$ 15.000+',
                    description: 'Especialista em arquitetura e design de sistemas de software complexos e escaláveis.',
                    responsibilities: [
                        'Arquitetar sistemas',
                        'Definir padrões de desenvolvimento',
                        'Otimizar performance',
                        'Liderar equipes técnicas'
                    ],
                    requirements: ['Conhecimento profundo de programação', 'Arquitetura de sistemas', 'Liderança'],
                    coursesNeeded: 'Engenharia de Software, pós-graduação'
                },
                {
                    id: 'mechaengineer',
                    name: 'Engenheiro Mecânico',
                    salary: 'R$ 4.000 - R$ 10.000+',
                    description: 'Projeta, analisa e manufatura máquinas, equipamentos e sistemas mecânicos.',
                    responsibilities: [
                        'Desenhar peças e máquinas',
                        'Simular e testar designs',
                        'Resolver problemas técnicos',
                        'Otimizar produção'
                    ],
                    requirements: ['Matemática e Física', 'CAD', 'Conhecimento de materiais'],
                    coursesNeeded: 'Engenharia Mecânica'
                }
            ]
        }
    ]
};

// Lógica de recomendação baseada nas respostas
function calculateRecommendations(answers) {
    // Mapa de valores de respostas para áreas
    const scoreMap = {
        technology: 0,
        design: 0,
        business: 0,
        health: 0,
        education: 0,
        engineering: 0
    };

    // Análise das respostas
    const answerValues = Object.values(answers);

    // Lógica de pontuação baseada nas respostas
    answerValues.forEach(value => {
        if (value.includes('analyticalLogical') || value.includes('analytical')) scoreMap.engineering += 2;
        if (value.includes('creative')) scoreMap.design += 2;
        if (value.includes('interpersonal')) scoreMap.health += 1;
        if (value.includes('innovative') || value.includes('curious')) scoreMap.technology += 2;
        if (value.includes('practical') || value.includes('management')) scoreMap.business += 2;
        if (value.includes('empathetic') || value.includes('teaching')) scoreMap.education += 2;
        if (value.includes('dynamic')) scoreMap.technology += 1;
        if (value.includes('collaborative')) scoreMap.education += 1;
        if (value.includes('focused') || value.includes('structured')) scoreMap.engineering += 1;
        if (value.includes('autonomous')) scoreMap.design += 1;
        if (value.includes('exact')) scoreMap.engineering += 2;
        if (value.includes('technology') || value.includes('techSavvy')) scoreMap.technology += 2;
        if (value.includes('arts') || value.includes('selfExpression')) scoreMap.design += 2;
        if (value.includes('health')) scoreMap.health += 2;
        if (value.includes('financial') || value.includes('impact')) scoreMap.business += 1;
        if (value.includes('creation') || value.includes('creativity')) scoreMap.design += 2;
        if (value.includes('analysis')) scoreMap.engineering += 2;
        if (value.includes('teaching')) scoreMap.education += 2;
        if (value.includes('innovation')) scoreMap.technology += 1;
    });

    // Ordenar por score e retornar top 3
    const sorted = Object.entries(scoreMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    return sorted.map(([areaId, score]) => {
        const areaPercentage = Math.min(100, 60 + (score * 5));
        return {
            areaId,
            area: professionsData.areas.find(a => a.id === areaId),
            percentage: areaPercentage
        };
    });
}
