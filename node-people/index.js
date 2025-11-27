const express = require("express");
const app = express();
const port = 3000;

const pessoas = [
    {id:1, nome: "Leandro", idade: 28},
    {id:2, nome: "Leandro", idade: 30},
    {id:3, nome: "Stefanie", idade: 28},
];

// criando funções auxiliares
// retornar o objeto por id
function buscarNomePorId(id){
    return pessoas.filter((nome) => nome.id == id);
}

app.get("/teste", (req, res) =>{
    res.send(pessoas);
});

app.get("/listaNomes", (req, res) =>{
    res.send(pessoas);
});

app.get("/listaNomes/:id", (req, res) =>{
    let index = req.params.id;
    res.json(buscarNomePorId(index));
});

// criando post para cadastrar

app.post("/listaNomes", (req, res) =>{
    nome.push(req.body);
    res.status(201).send('Nomes cadastrado com sucesso!');
});

app.delete("/listaNomes/:id", (req, res) =>{
   let index = buscarNomePorId(req.params.id);
   nomes.splice(index, 1);
   res.send(`Nomes com id ${req.params.id} excluida com sucesso!git`); 
});
app.listen(port, ()=>{
    console.log(`servidor rodando no endereço http://localhost:${port}`);
});