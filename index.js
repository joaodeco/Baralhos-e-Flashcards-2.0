const express = require ('express');
const app = express();
const porta = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('O servidor Express está funcionando !');
});

//Baralhos

const criarBaralho = require ('./baralhos/criarBaralho')
app.post('/baralhos', criarBaralho)

const listarBaralhos = require ('./baralhos/listarBaralhos')
app.get('/baralhos', listarBaralhos)

const atualizarBaralho = require ('./baralhos/atualizarBaralho')
app.put('/baralhos/:id', atualizarBaralho)

const deletarBaralho = require ('./baralhos/deletarBaralho')
app.delete('/baralhos/:id', deletarBaralho)

//Flashcards

// const criarFlashcard = require ('./flashcards/criarFlashcard')
// app.('/flashcards', criarFlashcard)

// const deletarFlashcard = require ('./flashcards/deletarFlashcard')
// app.('/flashcards', deletarFlashcard)

// const editarFlashcard = require ('./flashcards/editarFlashcards')
// app.('/flashcards', editarFlashcard)

// const listarFlashcards = require ('./flashcards/listarFlashcard')
// app.('/flashcards', listarFlashcards)

// const listarFlashcardsPorBaralho = require ('./flashcards/listarFlashcardPorBaralho')
// app.('/flashcards', listarFlashcardsPorBaralho)

// const listarFlashcardPorPergunta = require ('./flashcards/listarFlashcardPorPergunta')
// app.('/flashcards', listarFlashcardPorPergunta)

app.listen(porta, ()=>{
    console.log(`O servidor está rodando em http://localhost:${porta}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Algo deu errado')
})

