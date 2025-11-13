//
const vitorias = Number(prompt("Quantos jogos seu time venceu?"));
const empates = Number(prompt("Quantos jogos seu time empatou?"));

const pontos = vitorias * 3 + empates;

function mostra(mensagem) {
  document.write(mensagem + pontos, " pontos");
}
if (pontos > 10) {
  mostra("Classificado");
} else if (pontos < 5){
  mostra("Seu time precisa melhorar");
}
// mostra();
