let jogos = [
  "Minecraft",
  "Poppy playtime",
  "The last of us",
  "Subnautica",
  "Stardew Valley"
];

let procurarJogos = prompt("Digite o nome do jogo que deseja buscar:");

if (procurarJogos === null || procurarJogos.trim() === "") {
    console.log("A busca foi cancelada ou enviada em branco.");
} else {

    let jogoEncontrado = jogos.find(jogo =>
        jogo.toLowerCase().includes(procurarJogos.toLowerCase().trim())
    );

    if (jogoEncontrado) {
        console.log("O jogo " + jogoEncontrado+ "está na lista!");
    } else {
        console.log("Nenhum jogo encontrado com esse nome.");
    }
}