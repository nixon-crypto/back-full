const form = document.querySelector("form");
const lista = document.querySelector(".lista");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");
const listaMsg = document.querySelector(".lista-msg");
const endereco = document.getElementById("endereco");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Validação do formulário
  if (inputNome.value == "" || inputEmail.value == "" || inputTel.value == "" || inputEndereco.value == "") {
    alert("Digite seus dados");
    return false;
  }

  // condição para retirar a li > .lista-msg

  // Minha logica
  //  if (inputNome.value != "" || inputEmail.value != "" || inputTel.value != ""){

  // document.querySelector(".lista-msg").style.display = "none"
  // listaMsg.style.display="none"

  if (listaMsg) {
    listaMsg.remove(); // Modo simplificado
  }

  //criando botao de excluir
  const btnExcluir = document.createElement("button");
  btnExcluir.textContent = "Excluir";
  btnExcluir.className = "btn-delete";
  btnExcluir.addEventListener("click", function () {
    // const confirmar = confirm("Tem certeza que deseja excluir contato?");
    // if (confirmar) {
      li.remove();
  });

  // Criar LI
  const li = document.createElement("li");

  li.innerHTML = `
        <span class="contato-nome">${inputNome.value}</span>
        <span class="contato-email">${inputEmail.value}</span>
        <span class="contato-telefone">${inputTel.value}</span>
        <span class="contato-endereco">${inputEndereco.value}</span>
    `;

  console.log(li);

  // appendChild()
  lista.appendChild(li);
  li.appendChild(btnExcluir);
  // Limpar inputs
  form.reset();
});
