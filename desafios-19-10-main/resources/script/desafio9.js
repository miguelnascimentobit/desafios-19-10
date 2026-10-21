let notas = [8, 7, 9, 4, 6, 10];
let verificar = notas.some(nota => nota < 5);
if(verificar === true){
    console.log("Pelo menos um aluno possue nota abixo de 5");
}
else{
    console.log("Nenhum aluno possue nota abaixo de 5");
}