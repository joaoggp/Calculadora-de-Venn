var total= Number(prompt('Qual o número total de alunos?(CASO NÃO SAIBA DIGITE 0)'))
var calculo1= Number(prompt('Qual o valor de que estão em todos os grupos?')) 
var calculo2= Number(prompt('Qual o valor do grupo A e C (entre os 2)'))
var calculo3= Number(prompt('Qual o valor do grupo A e B (entre os 2)'))
var calculo4= Number(prompt('Qual o valor entre o grupo B e C (entre os 2)'))
var individual1=Number(prompt('Qual o número total SOMENTE no grupo A'))
var individual2=Number(prompt('Qual o número total SOMENTE no grupo B'))
var individual3=Number(prompt('Qual o número total SOMENTE no grupo C'))
var fora= Number(prompt("Valor de fora?"))



document.write(`Os que estão somente no grupo A e C são: ${calculo2 - calculo1} </br>`) //Valor do grupo 1 e 2
document.write(`Os que estão somente no grupo A e B são: ${calculo3 - calculo1} </br>`) //Valor do grupo 2 e 3
document.write(`Os que estão somente no grupo B e C são: ${calculo4 - calculo1} </br>`) //Valor do grupo 2 e 1



var calculofinal1=(calculo2-calculo1)
var calculofinal2=(calculo3-calculo1)
var calculofinal3=(calculo4-calculo1)

document.write(`${individual1 - calculofinal1 - calculo1 - calculofinal2 } Possuem dificuldade somente em A</br>`)
document.write(`${individual2 - calculofinal3 - calculo1 - calculofinal2 } Possuem dificuldade somente em B</br>`)
document.write(`${individual3 - calculofinal1 - calculo1 - calculofinal3 } Possuem dificuldade somente em C</br>`)
document.write(`${fora} São as pessoas que estão de fora</br>`)

var valorfinal1=individual1 - calculofinal1 - calculo1 - calculofinal2 
var valorfinal2=individual2 - calculofinal3 - calculo1 - calculofinal2
var valorfinal3=individual3 - calculofinal1 - calculo1 - calculofinal3


if (total == 0){
    document.write(valorfinal1 + calculofinal2 + calculo1 + calculofinal1 + valorfinal2 + calculofinal3 + valorfinal3 + fora + " É o valor total de intrevistados")
} else{
document.write(total - valorfinal1 - valorfinal2 - valorfinal3 - calculofinal1 - calculofinal2 - calculofinal3 - calculo1 + ' Não possuem dificuldade em nenhuma matéria')
}
