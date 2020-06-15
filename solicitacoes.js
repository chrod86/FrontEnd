function logout(){
    localStorage.removeItem("userVlan");
    window.location = "login.html";
}

function buscaSolicitacoe(){
    fetch("http://localhost:8080/solicitacoes/todas")
        .then(resultado => resultado.json())
        .then(resultado => preencheLinhas(resultado));
}

function preencheLinhas(lista){

    var templateSol  =  '<div class="row">'+
                            '<div class="col px-md-12">'+
                                '<a href="detalhe.html?numero={{NUMSOL}}"> '+
                                    '{{DATA}} De: {{ORIGEM}} / Para: {{DESTINO}}'+
                                '</a>'+
                            '</div>'+
                        '</div>';
    var strSol = "";
    for (i=0 ; i<lista.length ; i++){
        var solic = lista[i];   // apenas para simplificar
        strSol = strSol + templateSol.replace("{{NUMSOL}}",solic.numero)
                                      .replace("{{DATA}}",solic.dataSolicitacao)
                                      .replace("{{ORIGEM}}",solic.origem.nome)
                                      .replace("{{DESTINO}}",solic.destino.nome);
    }
    document.getElementById("listaSolicitacoes").innerHTML = strSol;                    

}
