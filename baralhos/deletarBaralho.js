const { baralhos, flashcards } = require ('../data')

const deletarBaralho = (req, res) => {
    const { id } = req.params
    const index = baralhos.findIndex((b) => b.id == id)

    if(index === -1){
        return res.status(404).send('Baralho nãon econtrado! ')
    }

    const baralhoDeletado = baralhos.splice(index, 1)[0]

    flashcards.forEach(flashcards, index => {
      if (flashcards.baralhoId = id) {
           flashcards.splice (index, 1)
      }
    })

    res.status(200).send({
        menssagen: 'Baralho deletado com sucesso',
        baralho: baralhoDeletado
    })
}

module.exports = deletarBaralho