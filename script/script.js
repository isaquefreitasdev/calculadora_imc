function imc(){
    const name = document.getElementById("name");
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value.replace(",",".");
    const p = document.getElementById("p");
    const calc = document.querySelector(".calc");
    try {
        if(name.value == "" || weight.value == "" || height.value == "" || p.value == ""){
            alert("Por favor, preencha todos os campos")
        }
        let calcImc = eval(weight) / eval(height**2);
        let indiceWeight = ""
        calcImc = calcImc.toFixed(2)
        if(calcImc < 18.5){
            indiceWeight = "Abaixo do peso";
        }else if(calcImc >=18.5 && calcImc <= 24.9 ){
            indiceWeight = "Peso normal";
        }else if(calcImc >=25 && calcImc >= 29.9){
            indiceWeight = "Sobrepeso";
        }else{
            indiceWeight = "Vai ao médico";
        }
        p.textContent = `O resultado é :${calcImc}. ${indiceWeight}`
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementById("name").value = "";
    }catch(e){
        console.log(e)
    }    
}