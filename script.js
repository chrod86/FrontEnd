var contador=0;

function mudaTexto(){
    document.getElementById("Titulo").innerHTML = " Cliquei "+contador+" vezes";
    contador++;
}

function buscaUsuario(){
    fetch("http://localhost:8080/usuarios")
        .then(resultado => resultado.json())
        .then(resultado => preenchLinhas(resultado));
}

function preencheLinhas(lista){
    var texto = "";
    var usuario;
    for (i=0; i<lista.length; i++){
        usuario = lista[i];
        texto = texto + "Nome: "+usuario.nome+" ("+usuario.email+")";
    }
    document.getElementById("resultado").innerHTML = texto;
}