
const senha = "12345";
const limite = 3;
let tentativas = 0;
let chave = "";
let acesso = false;

while (tentativas < limite && !acesso) {

    chave = prompt("Digite a senha:"); 
    tentativas++;

    if (chave === senha) {
        acesso = true;
        console.log("Acesso liberado!");
    } else {
        console.log("Tentativa" + tentativas + ": senha incorreta.");
    }
}

if (!acesso) {
    console.log("Acesso bloqueado!");
}