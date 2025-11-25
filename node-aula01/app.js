const express = require('express');
const app  = express();
const port = 3000;

// middleware para servir arquivos estaticos
app.use(express.static('public'));

//variavel com dados de produtos
const produtos = [
    {id:1, nome: 'Produto A', preco: 100},
    {id:2, nome: 'Produto B', preco: 150},
    {id:3, nome: 'Produto C', preco: 200},
]

// criar função
// rota principal
app.get('/', (req, res) =>{
    res.send('Bem vindo ao servidor Node.js')
});

// Rota produtos
app.get('/produtos', (req,res) =>{
    res.send(produtos);
});

// Rota home
app.get('/home', (req, res) =>{
    // console.log(__dirname);
    res.sendFile(__dirname + '/public/home.html');
})

// executando o servidor

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// variavel com dados de times
const times = [
    {id:1, nome:'Corinthians'},
    {id:2, nome:'São Paulo'},
    {id:3, nome:'Palmeiras'},
    {id:3, nome:'Santos'}
]
// rota times
app.get('/times', (req, res) => {
    res.send(times);
});