const express = require ('express');
const app = express;
const porta = 3000;
app.use(express.json());

app.length('/', (req, res ) => {
    res.send('O servidor Express está funcionando !');
});

app.listen(porta, ()=>{
    console.log(`O servidor está rodando em http://localhost:${porta}`);
});

//Baralhos

const criarBaralho = require ('./baralhos/criarBaralho')
app.get('/baralhos', criarBaralho)

const listarBaralhos = require ('./baralhos/listarBaralhos')
app.get('/baralhos', listarBaralhos)

const atualizarBaralho = require ('./baralhos/atualizarBaralho')
app.get('/baralhos', atualizarBaralho)

const deletarBaralho = require ('./baralhos/deletarBaralho')
app.get('/baralhos', deletarBaralho)

//Flashcards

const criarFlashcard = require ('./flashcards/criarFlashcard')
app.get('/flashcards', criarFlashcard)

const deletarFlashcard = require ('./flashcards/deletarFlashcard')
app.get('/flashcards', deletarFlashcard)

const editarFlashcard = require ('./flashcards/editarFlashcards')
app.get('/flashcards', editarFlashcard)

const listarFlashcards = require ('./flashcards/listarFlashcard')
app.get('/flashcards', listarFlashcards)

const listarFlashcardsPorBaralho = require ('./flashcards/listarFlashcardPorBaralho')
app.get('/flashcards', listarFlashcardsPorBaralho)

const listarFlashcardPorPergunta = require ('./flashcards/listarFlashcardPorPergunta')
app.get('/flashcards', listarFlashcardPorPergunta)

