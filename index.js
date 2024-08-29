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

const criarBaralho = require ('./baralhos/criarBaralho')
app.get('/baralho', criarBaralho)

const listarBaralhos = require ('./baralhos/listarBaralhos')
app.get('/baralho', listarBaralhos)

const atualizarBaralho = require ('./baralhos/atualizarBaralho')
app.get('/baralho', atualizarBaralho)

const deletarBaralho = require ('./baralhos/deletarBaralho')
app.get('/baralho', deletarBaralho)