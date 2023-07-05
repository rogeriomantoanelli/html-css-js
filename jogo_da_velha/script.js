console.log("Carregou com sucesso!");

//vamos configurar o evento de clique dos tds jogáveis
var tds_jogaveis = document.querySelectorAll('tbody td');
for(var n=0; n < tds_jogaveis.length; n++){
    var td = tds_jogaveis[n];
    td.indice=n;
    td.addEventListener("click", clicou_no_td);
}

//placar
var pontos_jogador = 0;
var pontos_cpu = 0;

//posicoes do jogo
var posicoes_jogo = [
    "","X","O",
    "O","X","X",
    "X","O","O"
]
//popular posições já preenchidas
function popular_posicoes(){
    for(var n=0; n < posicoes_jogo.length; n++){
        var jogada = posicoes_jogo[n];
        var cor_jogada = "";
        if(jogada == "X"){
            cor_jogada = "vermelho";
        }
        if(jogada == "O"){
            cor_jogada = "verde";
        }
        tds_jogaveis[n].innerHTML = 
        "<div class='"+cor_jogada+"'>"+jogada+"</div>";
    }
}
popular_posicoes();

//reiniciar partida
function reiniciar(){
    pontos_jogador = 0;
    pontos_cpu = 0;
    mostrar_placar();
}

//mostrar placar atual
function mostrar_placar(){
    var pjogador = document.querySelector('#pontos_jogador');
    var pcpu = document.querySelector('#pontos_cpu');
    pjogador.innerText = pontos_jogador;
    pcpu.innerText = pontos_cpu;
}

// definindo funções
function clicou_no_td(event){
    var indice = event.currentTarget.indice;
    if (posicoes_jogo[indice] == ""){
        event.target.innerHTML = "<div class='verde'>O</div>";
    }
    
    // alert(indice);
}


//No final de tudo
reiniciar();