let name = document.getElementById("visitors")
let error = document.getElementById("error")
let invite_name = document.getElementById("invitenames")
let section = document.getElementById("sectionhome")
let button = document.getElementById("button")
function startbutton(){
    if (name.value==="") {
        error.textContent = "Please Enter a Valid Input."
    }
    else{
        error.textContent = "";
        invite_name.textContent = name.value
        button.onclick = ("section")
    }
}
