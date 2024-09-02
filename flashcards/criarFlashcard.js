const { baralhos, flashcards } = require('../data');

function criarFlashcard(req, res) {
console.log(req.body);
const novoFlashcard = {
pergunta: req.body.pergunta,
resposta: req.body.resposta,
idBaralho: req.body.id
};
flashcards.push(novoFlashcard)
res
.status(201)
.send({message: 'Flashcard criado com sucesso', flashcards:
novoFlashcard});
}

module.exports = criarFlashcard