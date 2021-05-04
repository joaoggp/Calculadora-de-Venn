var esferas = Number(prompt("Quantas esferas de Venn o exercício possui?(ATUALMENTE SUPORTE A 3"))

if (esferas == 3){
var total= Number(prompt('Qual o número total de pessoas?(CASO NÃO SAIBA DIGITE 0)'))
var calculo1= Number(prompt('Qual o valor de que estão em todos os grupos?')) 
var calculo2= Number(prompt('Qual o valor do grupo A e C (entre os 2)'))
var calculo3= Number(prompt('Qual o valor do grupo A e B (entre os 2)'))
var calculo4= Number(prompt('Qual o valor entre o grupo B e C (entre os 2)'))
var individual1=Number(prompt('Qual o número total SOMENTE no grupo A'))
var individual2=Number(prompt('Qual o número total SOMENTE no grupo B'))
var individual3=Number(prompt('Qual o número total SOMENTE no grupo C'))
var fora= Number(prompt("Valor de fora? (pessoas que não estão em nenhum grupo)"))

document.write(`Os que estão somente no grupo A e C são: ${calculo2 - calculo1} </br>`) //Valor do grupo 1 e 2
document.write(`Os que estão somente no grupo A e B são: ${calculo3 - calculo1} </br>`) //Valor do grupo 2 e 3
document.write(`Os que estão somente no grupo B e C são: ${calculo4 - calculo1} </br>`) //Valor do grupo 2 e 1

var calculofinal1=(calculo2-calculo1) //Variavel do calculo acima
var calculofinal2=(calculo3-calculo1) //Variavel do calculo acima
var calculofinal3=(calculo4-calculo1) //Variavel do calculo acima

document.write(`${individual1 - calculofinal1 - calculo1 - calculofinal2 } São pessoas inseridas somente em A</br>`) //Calculo dos valores únicos
document.write(`${individual2 - calculofinal3 - calculo1 - calculofinal2 } São pessoas inseridas somente em B</br>`) //Calculo dos valores únicos
document.write(`${individual3 - calculofinal1 - calculo1 - calculofinal3 } São pessoas inseridas somente em C</br>`) //Calculo dos valores únicos
document.write(`${fora} São as pessoas que estão de fora</br>`)

var valorfinal1=individual1 - calculofinal1 - calculo1 - calculofinal2 
var valorfinal2=individual2 - calculofinal3 - calculo1 - calculofinal2
var valorfinal3=individual3 - calculofinal1 - calculo1 - calculofinal3


if (total == 0){
    document.write(valorfinal1 + calculofinal2 + calculo1 + calculofinal1 + valorfinal2 + calculofinal3 + valorfinal3 + fora + " É o valor total de pessoas")
} else{
document.write(total - valorfinal1 - valorfinal2 - valorfinal3 - calculofinal1 - calculofinal2 - calculofinal3 - calculo1 + ' Não estão inseridas em nenhum grupo')
}
}
if (esferas == 2){
    var total2= Number(prompt('Qual o número total de alunos?(CASO NÃO SAIBA DIGITE 0)'))
    if (total2 == 0 ){
        alert(`Sem suporte a este método.`)
        }
        else if(total2 >= 1){
    var varA= Number(prompt('Quantos fazem A?'))
    var varB= Number(prompt('Quantos fazem B?'))
    var nenhum= Number(prompt('Quantos não fazem nada? (caso não tenha coloque 0)'))
document.write(`Fazem A ou B: ${total2 - nenhum}</br>`)
var calculo5=total2-nenhum
document.write(`Fazem A e B: ${(varA + varB)-calculo5}</br>`)
var final3 = (varA + varB)-calculo5
document.write(`Fazem A: ${varA - final3 }</br> `)
document.write(`Fazem B: ${varB - final3}</br>`)
}
}

