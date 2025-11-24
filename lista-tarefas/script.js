const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btn.addEventListener("click", function (a) {
  if (tarefa.value.trim() == "") {  // verifica se os dados for nulo, aparece um popup pedindo para inserir algum dado. 
      alert("Digite uma tarefa.");
  } else {
    // adicionando elementos css direto pelo js
    lista.innerHTML += `
        <li>
        <i class="fas fa-check-circle check"></i><span>${tarefa.value}</span>
        <i class="fa-solid fa-trash-can close"></i>
        </li>
        `;
// tarefa.addEventListener("keydown", function(event){
//   if (event.key ==="Enter"){
//     event.preventDefault();
//   }
// })
  
  }

  // função do botao de excluir atividade
  const close = document.querySelectorAll(".close");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      close[i].parentElement.remove();
    });
  }
  tarefa.value = "";

  // função para aparecer como concluida
  lista.addEventListener("click", function (e) {
    e.target.parentElement.querySelector(".check").style.color = "#349223";
    e.target.parentElement.querySelector("span").style.textDecoration =
      "line-through";
  });
});
