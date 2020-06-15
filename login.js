function autenticar(){
    var txtEmail = document.getElementById("txtemail").value;
    var txtSenha = document.getElementById("txtsenha").value;

    console.log("Recebidos = "+txtEmail+" / "+txtSenha);

    var loginMSG = {
        email : txtEmail,
        senha : txtSenha
    }

    var cabecalho = {
        method  : 'POST',
        body    : JSON.stringify(loginMSG),
        headers : {
            'Content-type' : 'application/json'
        }
    }

    fetch('http://localhost:8080/login', cabecalho)
        .then(res => tratarResultado(res))

    function tratarResultado(res){
        if (res.status == 200){ //OK
            document.getElementById("erroMSG").innerHTML ="";
            res.json().then( res => logarUsuario(res));
        }
        else if (res.status == 403){ // usuario valido, senha invalida
            document.getElementById("erroMSG").innerHTML = "Senha invalida";
        }
        else if (res.status == 404){ // usuario invalido, senha valida
            document.getElementById("erroMSG").innerHTML = "Usuario desconhecido";
        }
    }

    // funcao para redirecionar a pagina
    function logarUsuario(res){
        localStorage.setItem("userVlan",JSON.stringify(res));
        window.location="perfil.html";
    }
}