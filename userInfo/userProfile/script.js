let myForm = document.querySelector("form");
let btn = document.querySelector("#calculateButton");


function calculate(ev) {
    ev.preventDefault();

    try {
        document.querySelector("input[type='radio']:checked").value;
    }
    catch(err) {

        req.textContent = "*Please select your gender."

    }

    let inputNameVal = document.getElementById("inputName").value;
    let inputGenderVal = document.querySelector("input[type='radio']:checked").value;
    let inputAgeVal = document.getElementById("inputAge").value;
    let inputCityVal = document.getElementById("inputCity").value;
    let inputStateVal = document.getElementById("inputState").value;
    let inputZipVal = document.getElementById("inputZip").value;
    let inputHeightVal = document.getElementById("inputHeight").value;
    let inputWeightVal = document.getElementById("inputWeight").value;

    let inputActivityEl = document.querySelector("#activity");
    let inputActivityVal = inputActivityEl.options[inputActivityEl.selectedIndex].text;
    let inputFitnessVal = inputActivityEl.value;
    
    if(!inputNameVal) {
        inputNameVal = "(Anonymous)"
    }

    localStorage.setItem("name", inputNameVal);
    localStorage.setItem("gender", inputGenderVal);
    localStorage.setItem("age", inputAgeVal);
    localStorage.setItem("city", inputCityVal);
    localStorage.setItem("state", inputStateVal);
    localStorage.setItem("zip", inputZipVal);
    localStorage.setItem("height", inputHeightVal);
    localStorage.setItem("weight", inputWeightVal);
    localStorage.setItem("activity", inputActivityVal);
    localStorage.setItem("fitness", inputFitnessVal);




    if(!inputAgeVal) {
        req.textContent = "*Please enter your age."
    }
    else if(!inputCityVal) {
        req.textContent = "*Please enter your city."
    }
    else if(!inputStateVal) {
        req.textContent = "*Please enter your state."
    }
    else if(!inputZipVal) {
        req.textContent = "*Please enter your zip code."
    }
    else if(!inputHeightVal) {
        req.textContent = "*Please enter your height."
    }
    else if(!inputWeightVal) {
        req.textContent = "*Please enter your weight."
    }
    else if(inputFitnessVal == 0) {
        req.textContent = "*Please specify your daily activity."
    }
    else {
        window.location.href = "myProfile.html";
    }


}


if(localStorage.length != 0){

    document.getElementById("inputName").value = `${localStorage.getItem("name")}`
    document.getElementById("inputAge").value = `${localStorage.getItem("age")}`
    document.getElementById("inputCity").value = `${localStorage.getItem("city")}`
    document.getElementById("inputState").value = `${localStorage.getItem("state")}`
    document.getElementById("inputZip").value = `${localStorage.getItem("zip")}`
    document.getElementById("inputHeight").value = `${localStorage.getItem("height")}`
    document.getElementById("inputWeight").value = `${localStorage.getItem("weight")}`

}



btn.addEventListener("click", calculate)






