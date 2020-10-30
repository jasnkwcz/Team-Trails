let myForm = document.querySelector("form");
let btn = document.querySelector("button");

function calculate(ev) {
    ev.preventDefault();

    let inputAgeVal = document.getElementById("inputAge").value;

    localStorage.setItem("age", inputAgeVal);



    window.location.href = "myProfile.html";

}



// function reDirect(ev) {
//     ev.preventDefault();

//     window.location.href = "myProfile.html";
    
// }


btn.addEventListener("click", calculate)




