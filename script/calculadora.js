let screen = 0
let calculated = false
document.getElementById('screen').innerHTML = screen

function limiter(){
    // Função para limitar o número de caracteres no elemento com id "screen"
    screen = document.getElementById('screen').innerHTML
    if (screen.length > 9){
    document.getElementById('screen').innerHTML = screen.slice(0,9) 
}
}

function displaynum(n){
    // Função para exibir os números digitados no elemento com id "screen"
    screen = document.getElementById('screen').innerHTML
    if(screen == 0){
        document.getElementById('screen').innerHTML = String(n)       
    }
    else if (calculated == true){
        document.getElementById('screen').innerHTML = String(n)
        calculated = false
    }
    else {
        document.getElementById('screen').innerHTML += String(n)
    }
    limiter()
}
function clear_c(){
    // Função para limpar os números do elemento com id "screen"
    screen = 0
    document.getElementById('screen').innerHTML = screen
}

function clear_ce(){
    // Função para limpar o último números digitados no elemento com id "screen"
    screen = document.getElementById('screen').innerHTML.trim()
    if (screen != 0){
        if (screen.length == 1){
            document.getElementById('screen').innerHTML = 0
        }
        else {
        document.getElementById('screen').innerHTML = screen.slice(0,-1)
    }
    
    }
}

function displayop(operator){

    // Função para exibir os operadores aritiméticos
    // digitados no elemento com id "screen"
    screen = document.getElementById('screen').innerHTML
    
    if ("+-*/".includes(operator.trim().slice(-1)) && !"+-*/".includes(screen.trim().slice(-1))){
        if (screen == 0){
            document.getElementById('screen').innerHTML = operator
        }
        else {
            document.getElementById('screen').innerHTML += String(operator)
        }
        
    }
    else if ("()".includes(operator.trim().slice(-1)) && !"()".includes(screen.trim().slice(-1))){
        if(screen == 0){
            document.getElementById('screen').innerHTML = operator
        }
        else {
            document.getElementById('screen').innerHTML += String(operator)
        }
    }
    
    limiter()
    calculated = false

}
function calc(){
    // Função para calcular o resultado e exibir no elemento com id "screen"
    screen = document.getElementById('screen').innerHTML
    result = eval(screen)
    document.getElementById('screen').innerHTML = result
    calculated = true
}
