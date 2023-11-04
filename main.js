let resultado = document.querySelector('.resultado');

let jogador = 0
let maquina = 0

function pedra() {
    const jogadas = ['pedra', 'papel', 'tesoura'];


    const escolha_maquina = Math.floor(Math.random() * (3 - 0) + 0);
    //console.log(jogadas[escolha_maquina

    if (jogadas[escolha_maquina] == 'pedra') {
        resultado.innerHTML = (`Empate! ${jogador} X ${maquina}`);
    } else if (jogadas[escolha_maquina] == 'papel') {
        resultado.innerHTML = (`Máquina Ganhou!  ${jogador} X ${maquina += 1}`);
    } else if (jogadas[escolha_maquina] == 'tesoura') {
        resultado.innerHTML = (`Você Ganhou! ${jogador += 1} X ${maquina}`);
    }

}
pedra();

function papel(){
    const jogadas = ['pedra', 'papel', 'tesoura'];
   

    const escolha_maquina = Math.floor(Math.random() * (3 - 0) + 0);
    if(jogadas[escolha_maquina] == 'papel'){
        resultado.innerHTML = (`Empate! ${jogador} X ${maquina}`)
    } else if (jogadas[escolha_maquina] == 'tesoura') {
        resultado.innerHTML = (`Máquina Ganhou!  ${jogador} X ${maquina += 1}`);
    } else if ( jogadas[escolha_maquina] == 'pedra') {
        resultado.innerHTML = (`Você Ganhou! ${jogador += 1} X ${maquina}`);
    }

}
papel();
 
function tesoura(){
    const jogadas = ['pedra', 'papel', 'tesoura'];
   

    const escolha_maquina = Math.floor(Math.random() * (3 - 0) + 0);
    if(jogadas[escolha_maquina] == 'tesoura'){
        resultado.innerHTML = (`Empate! ${jogador} X ${maquina}`)
    } else if (jogadas[escolha_maquina] == 'pedra') {
        resultado.innerHTML = (`Máquina Ganhou!  ${jogador} X ${maquina += 1}`);
    } else if ( jogadas[escolha_maquina] == 'papel') {
        resultado.innerHTML = (`Você Ganhou! ${jogador += 1} X ${maquina}`);
    }

}
tesoura();

function zerar(){
    return resultado.innerHTML = (`Iniciar ${jogador = 0} X ${maquina = 0}`)
}
zerar()


resultado.innerHTML = ('Escolha uma opção')