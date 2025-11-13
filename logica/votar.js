let idade = Number(prompt("Qual a sua idade? "))

if(idade < 16){
    document.write("Não pode votar");
}else if(idade >= 16 && idade < 18){
    document.write("Voto opcional");
}else{
    document.write("Voto obrigatorio");
}
