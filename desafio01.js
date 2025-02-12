var prompt = require('prompt-sync')()

//Questão 1

let nome = "Davilson";
console.log(nome);

//Questão 2
var idade = 25;
let altura = 1.75;
console.log(`idade: ${idade} altura: ${altura}`);

//Questão 3
let preco = 50;
let desconto = 0.2;
let valorFinal = preco - (preco*desconto);

console.log(`valor final: ${valorFinal}`);

//Questão 4
let temperatura = 30;
let mensagem = temperatura > 25 ? "Está calor!" : "Está fresco!";

console.log(mensagem);

//Questão 5

let idade = 10;
if(idade>=18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade");
}

//Questão 6
let nota = 6;

if(nota<0 || nota>10){
    console.log("Valor fora do intervalo");
}else if(nota>=7){
    console.log("Aprovado");
}else if(nota>5 && nota<6){ //entre 5 e 6
    console.log("Recuperação");
}else{
    console.log("Reprovado");
}

//Questão 7
let numero1 = 5;
let numero2 = 10;
if(numero1==numero2){
    console.log("Os números são iguais");
}else{
    console.log("Os números são diferentes");
}

//Questão 8
let nome = "Davi";
let idade = 50;
console.log("Olá meu nome é "+nome+" e eu tenho "+idade+" anos");

//Questão 9
for(let i=1;i<=10;i++){
    console.log(i);
}

//Questão 10
let numero = 0;

while(numero!=5){
    numero = prompt("Digite um número");
}

//Questão 11
let multiplicador = 7;

for(let i =1;i<=10;i++){
    console.log(`${multiplicador} x ${i} = ${multiplicador*i}`);
}

//Questão 12
for(let i=0;i<=20;i++){
    if (i%2==0){
        console.log(i)
    }
}

//Questão 13
function areaCirculo(raio){
    const pi = 3.14;

    return pi*(raio**2);
}

//Questão 14 
let numero1 = 20;  //declarando e inicializando primeria variavel
let numero2 = 20; //declarando e inicializando segunda variavel
let resultadoSoma = numero1 + numero2;  //declarando e inicializando váriavel com o valor da soma das variaveis
console.log(resultadoSoma); //output da soma

//Questão 15
function somaNumeros(numero1,numero2){
    let resultadoSoma = numero1+ numero2;

    return resultadoSoma;
}

console.log(somaNumeros(10,20));
