





function imc(){
    const name = document.getElementById("name");
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value.replace(",",".");
    const p = document.getElementById("p");
    const calc = document.querySelector(".calc");

    try {
        if( weight.value === "" || height.value === "" || name.value === ""|| p.value == ""){
            alert("Por favor, preencha todos os campos")
        }else{
        let calcImc = eval(weight) / eval(height**2);
        let indiceWeight = ""
        calcImc = calcImc.toFixed(2)
        if(calcImc < 18.5){
            indiceWeight = "Abaixo do peso"
        }else if(calcImc > 18.5 && calcImc <=24.9){
            indiceWeight = "Peso normal"
        }else{
            indiceWeight = "Sobrepeso"
        }
        
        p.textContent = `O resultado é :${calcImc}. ${indiceWeight}`
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementById("name").value = "";
        }
    
    }catch(e){
        console.log(e)
    }    
    }


