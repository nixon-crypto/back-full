const express = require("express");
const app = express();
const port = 3000;

// middlewrare para ler JSON
app.use(express.json());

// mock

const pessoas = [
  { id: 1, nome: "Leandro", idade: 28 },
  { id: 2, nome: "Leandro", idade: 30 },
  { id: 3, nome: "Stefanie", idade: 28 },
];

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];
// criando funções auxiliares
// retornar o objeto por id
function buscarNomePorId(id) {
  return pessoas.find((nome) => nome.id == id);
}

// Pegar posição ou index do elemento array por i
function buscarIdNomes(id) {
  return pessoas.findIndex((nome) => nome?.id == id);
}

// ---------------Rotas -----------------

// buscando nomes (lista de pessoas)
app.get("/listaNomes", (req, res) => {
  res.send(pessoas);
});

// buscando por ID
app.get("/listaNomes/:id", (req, res) => {
  const pessoa = buscarNomePorId(req.params.id);
  if (!pessoa) {
    return res.status(404).send("Nome não encontrado!");
  }
  res.json(pessoa);
});

// criando post para cadastrar

app.post("/listaNomes", (req, res) => {
  pessoas.push(req.body);
  res.status(201).send("Nomes cadastrado com sucesso!");
});

// apagando nomes por ID
app.delete("/listaNomes/:id", (req, res) => {
  let id = req.params.id;
  let index = buscarIdNomes(id);
  if (index === -1) {
    return res.status(404).send(`Nenhum nome com id ${id} foi encontrado`);
  }
  pessoas.splice(index, 1);
  res.send(`Nomes com id ${req.params.id} excluida com sucesso!`);
});

// Alterando dados do array com PUT
app.put("/listaNomes/:id", (req, res) => {
  let index = buscarIdNomes(req.params.id);
  if (index === -1)
    return res
      .status(404)
      .send(`Nenhum nome com o id ${req.params.id} foi encontrado!`);

  if (!req.body.nome || !req.body.idade) {
    return res.status(400).send(`Nome e idade são obrigatórios!`);
  }

  pessoas[index].nome = req.body.nome;
  pessoas[index].idade = req.body.idade;
  
  res.json(pessoas);
});

// Função auxiliar

function buscarIdTimes(id) {
  return times.findIndex((time) => time.id == id);
}

// -----------Rotas--------------

// consultar lista de times
app.get("/times", (req, res) => {
  res.send(times);
});

// consultar times pelo id
app.get("/times/:id", (req, res) => {
  const id = Number(req.params.id);
  const time = times.find((nome) => nome.id === id);
  if (!time) return res.status(404).send("Time não encontrado");

  res.json(time);
});

//cadastrar novos times usando POST
app.post("/times", (req, res) => {
  times.push(req.body);
  res.status(201).send("Time cadastrado com sucesso!");
});
// apagando time da lista pelo ID
app.delete("/times/:id", (req, res) => {
  let index = buscarIdTimes(req.params.id);
  if (index === -1) return res.status(404).send("Time não encontrado!");
  
  times.splice(index, 1);
  res.send(`Times com id ${req.params.id} apagado com sucesso!`);
});

// Alterando dados do array com PUT
app.put("/times/:id", (req, res) => {
  let index = buscarIdTimes(req.params.id);
  if (index === -1)
    return res
      .status(404)
      .send(`Nenhum time com o id ${req.params.id} foi encontrado!`);

  if (!req.body.nome || !req.body.estado) {
    return res.status(400).send("Nome e estado são obrigatórios!");
  }

  times[index].nome = req.body.nome;
  times[index].estado = req.body.estado;
  
  res.json(times);
});

app.listen(port, () => {
  console.log(`servidor rodando no endereço http://localhost:${port}`);
});
