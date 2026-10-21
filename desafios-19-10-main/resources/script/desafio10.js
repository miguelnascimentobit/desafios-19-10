let notas = [8, 7, 9, 4, 6, 10];
if(notas.every(nota => nota >=0 && nota <=10)){
    console.log("Todas as notas são válidas.");
}
else{
    console.log("Existe notas inválidas");
}