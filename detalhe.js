function recuperaDetalhe(){
    
    var parametro = window.location.search;
    console.log("link da url = "+parametro);
    var numero = parametro.substr(8);
    console.log("Agora eu tenho o numero da solicitacao "+numero);

    fetch("http://localhost:8080/solicitacoes/"+numero)
        .then(res => res.json())
        .then(res => console.log(res))
        .then(res => preencheDetalhe(res));
}

function preencheDetalhe(sol){

    var templateSol  =  '<div class="row">'+
                            '<div class="col px-md-12">'+
                                '<a>'+'Id Solicitacao: {{NUMSOL}} Data:{{DATA}} / Comando: {{COMANDO}}'+'</a>'+
                                '<a>'+'Solicitante: {{NOMESOL}} Racf: {{RACF}} Email: {{EMAIL}}'+'</a>'+
                                '<a>'+'Departamento de origem: {{ORIGEM}} Nome do departamento: {{NOMEDEPO}} Unidade: {{UNIDADEO}} Andar: {{ANDARO}}'+'</a>'+
                                '<a>'+'Departamento de destino: {{DESTINO}} Nome do departamento: {{NOMEDEPD}} Unidade: {{UNIDADED}} Andar: {{ANDARD}}'+'</a>'+
                            '</div>'+
                        '</div>';

    var strSol = "";
    strSol = strSol + templateSol.replace("{{NUMSOL}}",sol.numero)
                                 .replace("{{DATA}}",sol.data)
                                 .replace("{{ORIGEM}}",sol.origem.numero)
                                 .replace("{{NOMEDEPO}}",sol.origem.nome)
                                 .replace("{{UNIDADEO}}",sol.origem.unidade);
    
    document.getElementById("recuperaDetalhe").innerHTML = strSol;  
}