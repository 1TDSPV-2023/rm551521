
//Através  do objeto que chega nesta página recepcione e coloque seus atributos em elementos semanticos.
//Crie um CARD, onde você deve apresentar todos os atributos do usuário, menos a senha

if(localStorage.getItem("user-token") != null){
    const bemVindoEl = document.querySelector("#bemvindo-user");
    const botaoLogout = document.querySelector("#btnSair");

    //RECUPERANDO O OBJETO USER-VALIDADO DO LOCAL-STORAGE
    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

    bemVindoEl.innerHTML = usuarioValidado.nomeCompleto;

    //REMOVENDO OS ITENS DO LOCAL-STORE
    botaoLogout.addEventListener("click", ()=>{
        localStorage.removeItem("user-validado");
        localStorage.removeItem("user-token");
        window.location.href = "../login.html";
    });

}else{
    alert("Você precisa estar logado para acessar esta página!")
    window.location.href = "../login.html";
}
