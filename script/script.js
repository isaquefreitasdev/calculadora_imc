
function imc(){
    const name = document.getElementById("name");
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value.replace(",",".");
    const p = document.getElementById("p");
    const calc = document.querySelector(".calc");
    
    
    if(name.value == "" || weight.value == "" || height.value == "" || p.value == ""){
        alert("Por favor, preencha todos os campos")
    }

    let calcImc = eval(weight) / eval(height**2);

    calcImc = calcImc.toFixed(2)
   
        p.textContent = `O resultado é :${calcImc}`

    
    p.textContent = `O resultado é :${calcImc}`


}
// li  += ""