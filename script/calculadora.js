let tela = 0
let calculated = false
document.getElementById('tela').innerHTML = tela

function limiter(){
    // Função para limitar o número de caracteres no elemento com id "tela"
    tela = document.getElementById('tela').innerHTML
    if (tela.length > 9){
    document.getElementById('tela').innerHTML = tela.slice(0,17) 
}
}

function displaynum(n){
    // Função para exibir os números digitados no elemento com id "tela"
    tela = document.getElementById('tela').innerHTML
    if(tela == 0){
        document.getElementById('tela').innerHTML = String(n)       
    }
    else if (calculated == true){
        document.getElementById('tela').innerHTML = String(n)
        calculated = false
    }
    else {
        document.getElementById('tela').innerHTML += String(n)
    }
    limiter()
}
function clear_c(){
    // Função para limpar os números do elemento com id "tela"
    tela = 0
    document.getElementById('tela').innerHTML = tela
}

function clear_ce(){
    // Função para limpar o último números digitados no elemento com id "tela"
    tela = document.getElementById('tela').innerHTML.trim()
    if (tela != 0){
        if (tela.length == 1){
            document.getElementById('tela').innerHTML = 0
        }
        else {
        document.getElementById('tela').innerHTML = tela.slice(0,-1)
    }
    
    }
}

function displayop(operator){

    // Função para exibir os operadores aritiméticos
    // digitados no elemento com id "tela"
    tela = document.getElementById('tela').innerHTML
    
    if ("+-*/".includes(operator.trim().slice(-1)) && !"+-*/".includes(tela.trim().slice(-1))){
        if (tela == 0){
            document.getElementById('tela').innerHTML = operator
        }
        else {
            document.getElementById('tela').innerHTML += String(operator)
        }
        
    }
    else if ("()".includes(operator.trim().slice(-1)) && !"()".includes(tela.trim().slice(-1))){
        if(tela == 0){
            document.getElementById('tela').innerHTML = operator
        }
        else {
            document.getElementById('tela').innerHTML += String(operator)
        }
    }
    
    limiter()
    calculated = false

}
function calc(){
    // Função para calcular o resultado e exibir no elemento com id "tela"
    tela = document.getElementById('tela').innerHTML
    result = eval(tela)
    document.getElementById('tela').innerHTML = result
    calculated = true
}
