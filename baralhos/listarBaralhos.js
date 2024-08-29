const { baralhos } = require ('../data');

const listarbaralhos = (req, res) => {
    res.status(200).send(baralhos);
};

module.exports = listarBaralhos;