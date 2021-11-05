/*function clicou (){
document.getElementById("agradecimento").innerHTML = "<b>obrigada por clicar</b>";
console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://globallab.org/en/#.YXnY97_MIWQ")
}

function trocar (){
    alert("trocar texto");
}/
var nome = "keli Costa";
var idade = 26;
var idade2 = 10
//alert (nome + " tem" + " " + idade + " anos");
//alert (idade + idade2)
var frase = "japão é o melhor time do mundo";
console.log(nome)
console.log(idade + idade2);
console.log(frase.toLowerCase());
//alert(frase.replace("japão","brasil"))
*/
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop("pera");
//alert(lista[1]);
//console.log(lista.length)
//console.log(lista.reverse())
//console.log(lista.toString())
//console.log(lista.join(" - "))

/*var frutas = [{nome:"maça", cor: "vemelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/

/*var idade = prompt("qual sua idade?") //prompt adicona uma caixa para adicionar resposta
//var idade = 18;
if(idade>=18) {
    alert ("maior de idade");
}else{
    alert("menor de idade");
}*/

/*var count = 0;
while (count <= 5){
    console.log(count);
   alert(count);
   count++;  
};*/

/*var count;
for(count=0; count <=5; count++){
    alert(count);
};*/

/*var d = new Date();
//alert(d)
alert(d.getMonth());*/

/*function soma (n1, n2) {
    return n1 + n2;
}
//alert(soma(5,10));
function setreplace(frase, nome, novo_nome){
  return frase.replace(nome, novo_nome)
}
alert(soma(5,10));
alert(setreplace("VAI JAPÃO","JAPÃO","BRASIL"));*/

/*var validar;
function validaridade(idade){
    validar;
    if (idade>=18){
        validar=true
    }else{
        validader=false
    }
    return validar;    
}
var idade=prompt("Qual sua idade?");
validaridade(idade)
console.log(validar);*/

function clicou(){
    /*alert("obrigada por clicar");*/
    document.getElementById("agradecimento").innerHTML="obrigada por clicar";

}

function redirecionar(){
    window.open("https://digitalinnovation.one/"); //direciona para o site em um anova página
    //window.location.href="https://digitalinnovation.one/"; direciona para o site na mesma página
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML="obrigada por passar o mause";
    //alert("trocar texto");
    elemento.innerHTML="obrigada por passar o mause";
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML="passe o mause aqui";  
    elemento.innerHTML="passe o mause aqui";
}

function load(){
    alert("página carregada");

}

function funçãoChange(elemento){
    console.log(elemento.value); //aparece o valor selecionado no console.
    //alert(elemento.value); // aparece o valor selecionado como alerta na página.
}