const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você está estudando, o que te ajuda mais a entender o conteúdo?",
        alternativas: [
            {
                texto: "Ver imagens, vídeos e exercícios.",
                afirmacao: "Afirmação 1a alternativa"
            },
        
            {
                texto: "Ouvir explicações e palestras.",
                afirmacao: "Afirmação 2a alternativa"
            },
        ]    
    },
    {
        enunciado: "Como você prefere revisar o material antes de uma prova?",
        alternativas: [
            {
                texto: " Lendo suas anotações ou resumos.",
                afirmacao: "Afirmação 1a alternativa"
            },
        
            {
                texto: "Discutindo o conteúdo com colegas ou explicando em voz alta.",
                afirmacao: "Afirmação 2a alternativa"
            },
        ]    
    },
    {
        enunciado: "Qual atividade você acha mais útil durante os estudos?",
        alternativas: [
            {
                texto: "Fazer exercícios práticos ou simulações.",
                afirmacao: "Afirmação 1a alternativa"
            },
        
            {
                texto: " Assistir a vídeos e apresentações visuais.",
                afirmacao: "Afirmação 2a alternativa"
            },
        ]    
    },
    {
        enunciado: "Quando você precisa memorizar algo, o que funciona melhor para você?",
        alternativas: [
            {
                texto: "Repetir em voz alta várias vezes.",
                afirmacao: "Afirmação 1a alternativa"
            },
        
            {
                texto: " Escrever repetidamente ou fazer um mapa mental.",
                afirmacao: "Afirmação 2a alternativa"
            },
        ]    
    },
    {
        enunciado: "Em que tipo de ambiente você se sente mais produtivo(a) ao estudar?",
        alternativas: [
            {
                texto: "Em um lugar silencioso e sem distrações.",
                afirmacao: "Afirmação 1a alternativa"
            },
        
            {
                texto: "Em um ambiente com música ou sons de fundo.",
                afirmacao: "Afirmação 2a alternativa"
            },
        ]    
    },
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    caixaAlternativas.textContent="";
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[atual].enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        });        
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();