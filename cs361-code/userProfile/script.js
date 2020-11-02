let myForm = document.querySelector("form");
let btn = document.querySelector("#calculateButton");


function calculate(ev) {
    ev.preventDefault();

    let inputAgeVal = document.getElementById("inputAge").value;

    localStorage.setItem("age", inputAgeVal);



    window.location.href = "myProfile.html";

}




btn.addEventListener("click", calculate)






