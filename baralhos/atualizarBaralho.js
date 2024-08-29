const { baralhos } = require ('../data');

const atualizarBaralho = (req, res) => {
    const { id } = req.params;
    const novoTitulo = req.body.titulo;

    const baralho = baralhos.find((b) => b.id == id);

    if (!baralho) {
        return res.status(400).send({menssagen: 'Baralho não encontrado' });
    }
    baralho.titulo = novoTitulo
    res.status(200).send({
        menssagen: 'Baralho atualizado com sucesso!',
        baralho: baralho
    })
};

module.exports = atualizarBaralho