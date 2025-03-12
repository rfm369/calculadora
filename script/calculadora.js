let screen = 0
let calculated = false
document.getElementById('tela').innerHTML = screen

function limiter(){
    let limit
    // Função para limitar o número de caracteres no elemento com id "tela"
    screen = document.getElementById('tela').innerHTML
    if (window.innerWidth > 650){
        limit = 25
    }
    else {
        limit = 15
    }
    if (screen.length > limit){
    document.getElementById('tela').innerHTML = screen.slice(0,limit) 
}
}

function displaynum(n){
    // Função para exibir os números digitados no elemento com id "tela"
    screen = document.getElementById('tela').innerHTML
    if(screen == 0){
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
    screen = 0
    document.getElementById('tela').innerHTML = screen
}

function clear_ce(){
    // Função para limpar o último números digitados no elemento com id "tela"
    screen = document.getElementById('tela').innerHTML.trim()
    if (screen != 0){
        if (screen.length == 1){
            document.getElementById('tela').innerHTML = 0
        }
        else {
        document.getElementById('tela').innerHTML = screen.slice(0,-1)
    }
    
    }
}

function displayop(operator){

    // Função para exibir os operadores aritiméticos
    // digitados no elemento com id "tela"
    screen = document.getElementById('tela').innerHTML
    
    if ("+-*/.".includes(operator.trim().slice(-1)) && !"+-*/.".includes(screen.trim().slice(-1))){
        if (screen == 0){
            document.getElementById('tela').innerHTML = operator
        }
        else {
            document.getElementById('tela').innerHTML += String(operator)
        }
        
    }
    else if ("()".includes(operator.trim().slice(-1)) && !"()".includes(screen.trim().slice(-1))){
        if(screen == 0){
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
    screen = document.getElementById('tela').innerHTML
    result = eval(screen)
    document.getElementById('tela').innerHTML = result
    calculated = true
}
