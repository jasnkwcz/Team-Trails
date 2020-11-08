document.getElementById("showName").textContent = `${localStorage.getItem("name")}`
document.getElementById("showGender").textContent = `${localStorage.getItem("gender")}`
document.getElementById("showAge").textContent = `${localStorage.getItem("age")}`
document.getElementById("showCity").textContent = `${localStorage.getItem("city")}`
document.getElementById("showState").textContent = `${localStorage.getItem("state")}`
document.getElementById("showZip").textContent = `${localStorage.getItem("zip")}`
document.getElementById("showHeight").textContent = `${localStorage.getItem("height")}`
document.getElementById("showWeight").textContent = `${localStorage.getItem("weight")}`
document.querySelectorAll(".showActivity")[0].textContent = `${localStorage.getItem("activity")}`


let DA = `${localStorage.getItem("activityNum")}`
let ageNum = `${localStorage.getItem("age")}`
let kg = `${localStorage.getItem("weight")}`
let cm = `${localStorage.getItem("height")}`

let fitnessLevel = calculateFitLevel(DA, ageNum, kg, cm);

document.getElementById("showActivityNum").textContent = fitnessLevel;
document.querySelector(".level").textContent = fitnessLevel;







// document.querySelectorAll(".showActivity")[1].textContent = `${localStorage.getItem("activity")}`

let recommend = [
    "the easiest",
    "some easy",
    "some intermediate level",
    "some challenging",
    "the most challenging"
];

document.getElementById("recommend").textContent = recommend[fitnessLevel - 1]

let delClick = document.getElementById("delete");
delClick.addEventListener("click", (ev) => {
    ev.preventDefault();
    localStorage.clear();
    window.location.href = "fillOutForm.html";
})



function calculateFitLevel(DA, age, kg, cm) {
    let result = parseInt(DA)
    let agePts = 0
    let BMIpts = 0

    if(age >= 6 && age <= 17){
        agePts = 5
        result += 5
    } 
    else if (age >= 18 && age <= 64) {
        agePts = 3
        result += 3
    } 
    else if (age >= 65) {
        agePts = 1
        result += 1
    } 
    else {
        agePts = 0
        result = 0
    }

    BMI = kg / ((cm/100)**2)

    if (BMI >= 18.5 && BMI <= 24.9) {
        BMIpts = 2
        result += 2
    }

    let sum = result

    result = Math.round(result * 5 / 12);

    document.getElementById("showWork1").textContent = `${Math.round(BMI*10)/10} = ${kg} / (${cm}/100)^2`
    document.getElementById("showWork2").textContent = `${sum} = ${DA} + ${agePts} + ${BMIpts}`
    document.getElementById("showWork3").textContent = `${result} = round(${sum} * 5 / 12)`

    return result;
}











// let showAge = document.getElementById("showAge");
// showAge.textContent = `${localStorage.getItem("age")}`

