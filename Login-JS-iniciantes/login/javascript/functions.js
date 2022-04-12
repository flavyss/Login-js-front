//iniciando a função que fará nosso login funcionar. aqui uso uma arrow function
const login = () => {

    //capturando os elementos do html que farão parte da interação com o login 
    let user = document.querySelector("input[type=text]") // nome do usuario
    let botao = document.querySelector("input[type=button]") // senha ddo usuario
    let senha = document.querySelector("input[type=password]") // o botão do formulario que vai determinar que o usuario digitou tudo

    // aqui realizo uma função para quando o botão for clickado algo aconteça
    botao.addEventListener('click', () => {
        //vou criar uim objeto para servir como nosso "banco de dados" é com ele que vamos validar as informações que o usuario digitou nos inputs
        let login = {
            'nome':'admin',
            'pass':'adm123'
        }

        //agora com nossos inputs dentro de variaveis e com nosso "banco de dados" pronto vamos validar tudo atravez das condições if e else
        //nesse caso vou validar apenas as credenciais login e senha. mas se quiserem podem adicionar condições pra caso o usuario não preencha um campo...
        if(user.value == login.nome && senha.value == login.pass){
    
            alert('usuario autorizado, bem vindo: ' + user.value)
            window.location.href = "../tela.html"
    
        }

        //estabelecendo que se as credenciais não estiverem corretas uma janela vai aprecer alertando que as informações estão incorretas
        else{
            alert('informações de login incorretas')
        }

    })

}

login(); // chamando a função e fazendo o programa funcionar