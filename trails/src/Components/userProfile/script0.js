let userProfileLink = document.getElementById("userProfile")



function confirmProfile() {

    if(localStorage.length == 0) {
        window.location.href = "userProfile/fillOutForm.html";
    } else {
        window.location.href = "userProfile/myProfile.html";
    }

}



userProfileLink.addEventListener("click", confirmProfile)