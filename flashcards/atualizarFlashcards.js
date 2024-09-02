const { flashcards } = require ('../data');

const atualizarFlashcard = (req, res, flashcard) => {
    const { id } = req.params;
    const novaPergunta = req.body.titulo;
    const novaResposta = req.body.titulo;

    const flashcard = flashcard.find((b) => b.id == id);

    if (!flashcard) {
        return res.status(400).send({menssagen: 'Flashcard não encontrado' });
    }
    flashcard.pergunta = novaPergunta
    flashcard.resposta = novaResposta
    res.status(200).send({
        menssagen: 'Flashcard atualizado com sucesso!',
        flashcard: flashcard
    })
};

module.exports = atualizarFlashcard