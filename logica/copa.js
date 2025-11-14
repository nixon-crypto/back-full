// const anoInicio = 1930;

let anoInicio = Number(prompt("Digite o ano da primeira Copa do Mundo que você viu:"))
let anoAtual = 2025;

while(anoInicio<= anoAtual){
    anoInicio = anoInicio + 4;
    console.log(`Copa do mundo: ${anoInicio}`);
}