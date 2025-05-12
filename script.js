let pergunta = document.querySelector('.pergunta')
const respostas = document.querySelectorAll('#OpcoesRespostas li')

let numQuest = 1

if(numQuest == 1){
    pergunta.innerHTML = '1. O que a LGPD regula?'
    respostas[0].textContent = 'a) O comércio exterior'
    respostas[1].textContent = 'b) O uso de dados pessoais' //certa
    respostas[2].textContent = 'c) As relações trabalhistas'
}
else if(numQuest == 2){
    pergunta.innerHTML = '2. Quem é o titular dos dados segundo a LGPD?'
    respostas[0].textContent = 'a) O governo'
    respostas[1].textContent = 'b) A empresa controladora'
    respostas[2].textContent = 'c) A pessoa a quem os dados se referem' //certa
}
else if(numQuest == 3){
    pergunta.innerHTML = '3. O que é considerado dado sensível?'
    respostas[0].textContent = 'a) Nome completo'
    respostas[1].textContent = 'b) Opinião política' //certa
    respostas[2].textContent = 'c) Endereço de e-mail'
}
else if(numQuest == 4){
    pergunta.innerHTML = '4. Qual é a função da ANPD?'
    respostas[0].textContent = 'a) Controlar preços de mercado'
    respostas[1].textContent = 'b) Proteger os direitos autorais'
    respostas[2].textContent = 'c) Fiscalizar o cumprimento da LGPD' //certa
}
else if(numQuest == 5){
    pergunta.innerHTML = '5. O que é necessário para tratar dados pessoais?'
    respostas[0].textContent = 'a) Ter o consentimento do titular ou base legal' //certa
    respostas[1].textContent = 'b) Ter um CNPJ ativo'
    respostas[2].textContent = 'c) Registrar os dados no cartório'
}
