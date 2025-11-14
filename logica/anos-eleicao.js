let anoAtual = new Date().getFullYear();
let anoInicio = Number(prompt("Digite o ano da primeira eleição que você acompanhou:"))

while(anoInicio <= anoAtual){
    let tipoAno = (anoInicio % 2 === 0) ? "ano par" : "ano impar";
    console.log("Ano da eleição: ", anoInicio, tipoAno);
    anoInicio += 2;
}