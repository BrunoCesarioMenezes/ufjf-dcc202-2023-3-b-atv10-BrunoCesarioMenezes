
let joao = 1;
let maria = 2;

function getMaria (){
    return maria;
}

function getJoao(){
    return joao;
}

function setMaria(y){
    maria = y;
}

function setJoao(x){
    joao = x;
}

function deJoaoParaMaria(){
    maria = maria + joao;
    joao = 0;
}

function deMariaParaJoao (){
    joao = joao + maria;
    maria = 0;
}

export {getJoao, getMaria, setJoao, setMaria, deJoaoParaMaria, deMariaParaJoao}