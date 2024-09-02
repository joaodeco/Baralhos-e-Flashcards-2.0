const { flashcards } = require ('../data')

const deletarFlashcard = (req, res) => {
    const { id } = req.params
    const index = flashcards.findIndex((b) => b.id == id)

    if(index === -1){
        return res.status(404).send('Flashcard não econtrado! ')
    }

    const flashcardDeletado = flashcards.splice(index, 1)[0]

    flashcards.forEach(flashcards, index => {
      if (flashcards.baralhoId = id) {
           flashcards.splice (index, 1)
      }
    })

    res.status(200).send({
        menssagen: 'Flashcard deletado com sucesso',
        flashcard: flashcardDeletado
    })
}

module.exports = deletarFlashcard