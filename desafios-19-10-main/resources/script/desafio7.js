let notas = [6,8,10,15,-2];
let pergunta = Number (prompt("1- Exibir todas as notas.\n2- Verificar nota\n3- Encontrar a posição de uma nota específica.\n4- Remover uma nota incorreta.\n5- Organizar as notas em ordem crescente.\n6- Sair\n Digite o que deseja fazer:"));
while(pergunta !== 6){
switch(pergunta){
case 1:
    console.log("Notas",notas)
    break;
    case 2:
        let verificar = Number(prompt("Digite a nota que deseja verificar:"));
        if(notas.includes(verificar)){
            console.log("A nota "+ verificar + " está no boletim");
        }
        else{
            console.log("A nota "+ verificar + " não está no boletim");;
        }
        break;
        case 3:
            let encontrar = Number(prompt("Digite a nota que deseja encontar:"));
            let posicao = notas.indexOf(encontrar);
            if(posicao !== -1){
            console.log("A posição de "+encontrar+" é " + posicao);
            }
            else{
            console.log("nota "+ encontrar+" não foi encontrada");
            }
        break;
        case 4:
            let mudar = Number(prompt("Digite a nota que deseja remover:"));
            let indice = notas.indexOf(mudar); 

            if(indice !== -1){

            notas.splice(indice, 1); 
            console.log("A nota " + mudar + " foi removida");
             }
            else{
                        console.log("nota "+mudar+" não encontrada");
                    }
        break;
                case 5:
                    let crescente = notas.sort((a, b) => {return a - b});
                    console.log("Numeros em ordem crescente",crescente);
                break;
                default:
                    console.log("Opção invalida")
                    break;

}
pergunta = Number (prompt("1- Exibir todas as notas.\n 2- Verificar nota\n 3- Encontrar a posição de uma nota específica.\n4- Remover uma nota incorreta.\n5- Organizar as notas em ordem crescente.\n 6- Sair\n Digite o que deseja fazer:"));
};
console.log("Saindo do sistema")