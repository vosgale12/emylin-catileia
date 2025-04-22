document.addEventListener('DOMContentLoaded', function(){
    const botaoAumentarFonte = document.getElementById('aumentar-fonte')
    //Pega o botão de aumentar fonte e coloca na constante

    let tamanhoDaFonte = 1
    // define o tamanho da fonte na variável

    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoAumentarFonte.addEventListener('click', function(){
        tamanhoDaFonte = tamanhoDaFonte + 0.1
        document.body.style.fontSize = `${tamanhoDaFonte}rem`
    })
    const botaoDiminuir = document.getElementById('diminuir-fonte') 
    botaoDiminuir.addEventListener('click', function(){
        tamanhoDaFonte = tamanhoDaFonte - 0.1;
        document.body.style.fontSize = tamanhoDaFonte+"rem";
        

    })
    const alternaContraste = document.getElementById('alterna-contraste')
    alternaContraste.addEventListener('click', function(){
            document.body.classList.toggle('alto-contraste')
    })

    botaoAcessibilidade.addEventlistener('click', function(){
        botaoAcessibilidade.classList.toggle('rotacao-botao');
        opcoesAcessibilidade.classList.toggle('apresenta-lista');
    })
  


})

