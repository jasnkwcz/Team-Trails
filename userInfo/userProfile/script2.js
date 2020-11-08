document.getElementById("showName").textContent = `${localStorage.getItem("name")}`
document.getElementById("showGender").textContent = `${localStorage.getItem("gender")}`
document.getElementById("showAge").textContent = `${localStorage.getItem("age")}`
document.getElementById("showCity").textContent = `${localStorage.getItem("city")}`
document.getElementById("showState").textContent = `${localStorage.getItem("state")}`
document.getElementById("showZip").textContent = `${localStorage.getItem("zip")}`
document.getElementById("showHeight").textContent = `${localStorage.getItem("height")}`
document.getElementById("showWeight").textContent = `${localStorage.getItem("weight")}`
document.querySelectorAll(".showActivity")[0].textContent = `${localStorage.getItem("activity")}`
document.getElementById("showFitness").textContent = `${localStorage.getItem("fitness")}`


document.querySelector(".level").textContent = `${localStorage.getItem("fitness")}`
document.querySelectorAll(".showActivity")[1].textContent = `${localStorage.getItem("activity")}`

let rec = [
    "the easiest",
    "some easy",
    "some intermediate level",
    "some challenging",
    "the most challenging"
]

document.querySelector(".recommend").textContent = rec[`${localStorage.getItem("fitness")}` - 1]



// let showAge = document.getElementById("showAge");
// showAge.textContent = `${localStorage.getItem("age")}`

