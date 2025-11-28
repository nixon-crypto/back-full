const express = require("express");
const app = express();
const port = 3000;

// indicar para express ler body com json
app.use(express.json());

// mock

const pessoas = [
  { id: 1, nome: "Leandro", idade: 28 },
  { id: 2, nome: "Leandro", idade: 30 },
  { id: 3, nome: "Stefanie", idade: 28 },
];

// criando funções auxiliares
// retornar o objeto por id
function buscarNomePorId(id) {
  return pessoas.filter((nome) => nome.id == id);
}

app.get("/teste", (req, res) => {
  res.send(pessoas);
});

app.get("/listaNomes", (req, res) => {
  res.send(pessoas);
});

app.get("/listaNomes/:id", (req, res) => {
  let index = req.params.id;
  res.json(buscarNomePorId(index));
});

// criando post para cadastrar

app.post("/listaNomes", (req, res) => {
  pessoas.push(req.body);
  res.status(201).send("Nomes cadastrado com sucesso!");
});

// apagando nomes por ID
app.delete("/listaNomes/:id", (req, res) => {
  let index = buscarNomePorId(req.params.id);
  pessoas.splice(index, 1);
  res.send(`Nomes com id ${req.params.id} excluida com sucesso!`);
});

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];
// function buscarTimesPorId(id) {
//   return times.filter((time) => time.id == id);
// }

// consultar lista de times
app.get("/times", (req, res) => {
  res.send(times);
});

// consultar times pelo id
app.get("/times/:id", (req, res) => {
  let index = req.params.id;
  res.json(buscarTimesPorId(index));
});


//cadastrar novos times usando POST
app.post("/times", (req, res) =>{
  times.push(req.body);
  res.status(201).send("Time cadastrado com sucesso!");
});
// apagando time da lista pelo ID
app.delete("/times/:id", (req, res) =>{
  let remove = buscarTimesPorId(req.params.id);
  times.splice(remove, 1);
  res.send(`Times com id ${times} ${req.params.id} apagado com sucesso!`);
});
// Não consegui imprimir todos os dados do array ao inves só do ID, resolver isso amanha.


app.listen(port, () => {
  console.log(`servidor rodando no endereço http://localhost:${port}`);
});
