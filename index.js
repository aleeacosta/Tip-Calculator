const cantPersonas = document.getElementById("nPeople")
const bill = document.getElementById("bill")

let billValue = 0
let cPersonaValue = 0

// Inputs

bill.addEventListener("input", (e) => {
    e.target.value = e.target.value.slice(0, 8) // obtenemos el valor ingresado en el input
    billValue = bill.value 
})

cantPersonas.addEventListener("input", (e) => {
    e.target.value = e.target.value.slice(0, 8)
    cPersonaValue = cantPersonas.value 
})

// Funcion de calculo

const calc = (p) => {
    const tipPorcentage = document.getElementById(p).value
    const tipAmount = (billValue*(tipPorcentage/100))/cPersonaValue
    document.getElementById("tipAmount").innerHTML = "$" + tipAmount.toFixed(2)
    const Total = ((billValue/cPersonaValue) + tipAmount)
    document.getElementById("total").innerHTML = "$" + Total.toFixed(2)
}

// Botones


document.getElementById("5P").onclick = function() {   
    calc("5P")     
}

document.getElementById("10P").onclick = function() {    
    calc("10P")     
}

document.getElementById("15P").onclick = function() {     
    calc("15P")
}

document.getElementById("25P").onclick = function() {     
    calc("25P")   
}

document.getElementById("50P").onclick = function() {     
    calc("50P")    
}




