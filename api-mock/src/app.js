import express from "express";
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

export default app;

const cadastros = [
  {
    id: 1,
    nome: "Fernanda Silva",
    telefone: "11987654321",
    cpf: "123.456.789-00",
    email: "fernanda@gmail.com",
    idade: 28,
    endereco: "Rua das Flores, 123",
  },
  {
    id: 2,
    nome: "Caio Oliveira",
    telefone: "11922223333",
    cpf: "987.654.321-11",
    email: "caio@gmail.com",
    idade: 32,
    endereco: "Avenida Brasil, 450",
  },
  {
    id: 3,
    nome: "Pedro Almeida",
    telefone: "21999998888",
    cpf: "321.654.987-55",
    email: "pedro@hotmail.com",
    idade: 45,
    endereco: "Rua Central, 999",
  },
];

function buscarNomeId(id) {
 return cadastros.find((nome) => nome.id == id);
}

function buscarIdNome(id){
  return cadastros.findIndex((nome) => nome?.id == id);
}

app.get("/cadastro", (req, res) => {
    res.send(cadastros);
});

app.get("/cadastro:id", (req, res) => {
  const pessoa = buscarNomeId(req.params.id);
  if (!pessoa) {
    return res.status(404).send("Nome não encontrado!");
  }
  res.json(pessoa);
});

// cadastrar pessoas por id
app.post("/cadastro", (req, res) => {
  cadastros.push(req.body.id);
  res.status(201).send("Nome cadastrado com sucesso!");

  res.json(cadastros);
});

app.put("/cadastro:id", (req, res) => {
  let index = buscarIdNome(req.params.id);
  if (index === -1) return res.status(404).send(`Nenhum nome com o id ${req.params.id} foi encontrado!`);

  if(!req.body.nome || !req.body.idade){
    return res.status(400).send(`Nome e idade são obrigatórios!`);
  }
  cadastros[index].nome = req.body.nome;
  cadastros[index].idade = req.body.idade;

  res.json(cadastros);
});

app.delete("/cadastro:id", (req, res) =>{
  let id = req.params.id;
  let index = buscarIdNome(id);
  if(index === -1){
    return res.status(404).send(`Nenhum nome com id ${id} foi encontrado.`);
  }
  cadastros.splice(index, 1);
  res.send(`Nome com id ${req.params.id} excluida com sucesso !`);
});