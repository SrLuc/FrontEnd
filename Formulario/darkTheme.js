function trocarTema()
{
    let titulo = document.querySelector("body > div > div.box1 > h1");
    titulo.style.color = "#FD8911";
    titulo.style.textShadow="-2px 1px 5px #FFFFFF";

    let caixa1 = document.querySelector("body > div > div.box1");
    caixa1.style.backgroundColor = "#020F27";

    let entrada = document.querySelectorAll("input");
    for (let index = 0; index < 2; index++) 
    {        
        entrada[index].style.backgroundColor="#CCB8A3";
        entrada[index].style.borderRadius="0.5rem";
        entrada[index].style.outline="none";
    }
    entrada[0].setAttribute("placeholder", "Usuario");
    entrada[1].setAttribute("placeholder", "Senha");

    let useConta = document.querySelector("body > div > div.box1 > h4");
    useConta.style.color = "#F1F1F1";
    useConta.innerHTML="Ou use sua conta"

    let esqueceuSenha = document.querySelector("body > div > div.box1 > button.ForgotPass > a");
    esqueceuSenha.style.backgroundColor="#020F27";
    esqueceuSenha.style.color = "#F1F1F1";
    esqueceuSenha.innerHTML="Esqueceu a senha ? ";

    let botaoLogar = document.querySelector("body > div > div.box1 > button.btn-login");
    botaoLogar.style.backgroundColor="#FD8911";
    botaoLogar.style.boxShadow="1px 1px 10px 0px #9A5626";

    let txtBotaoLogar = document.querySelector("body > div > div.box1 > button.btn-login > a");
    txtBotaoLogar.style.color="#F1F1F1";

    let ai = document.querySelector("body > div");
    ai.style.backgroundColor="#010117";

    let ab = document.querySelector("body");
    ab.style.backgroundColor="#010117";

    let caixa2 = document.querySelector("body > div > div.box2");
    caixa2.style.backgroundColor="#FD8911";

    let txtcaixa2 = document.querySelector("body > div > div.box2 > h1");
    txtcaixa2.style.color="#010117";
    txtcaixa2.innerHTML="HTML CSS Logar"

    let txt2caixa2 = document.querySelector("body > div > div.box2 > h5");
    txt2caixa2.style.color="#010117";
    txt2caixa2.innerHTML="Este Formulario de Login foi construido usando HTML, CSS e Javascript";
    
}