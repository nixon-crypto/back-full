// const anoInicio = 1930;

let anoInicio = Number(prompt("Digite o ano da primeira Copa do Mundo que você viu:"))
const anoAtual = 2025;
copa = 0;

while(anoAtual <= anoInicio){
    anoInicio = anoInicio + 4;
}
console.log(`Copa do mundo: ${anoInicio}`);