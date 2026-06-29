
function openPopup(){

    document.getElementById("welcomePopup").style.display = "block";

    document.getElementById("heroImage").style.visibility = "hidden";

}

function closePopup(){

    document.getElementById("welcomePopup").style.display = "none";

    document.getElementById("heroImage").style.visibility = "visible";

}

function goToRoadmap(){

    closePopup();

    document.getElementById("Roadmap").scrollIntoView({
        behavior:"smooth"
    });

}

window.onclick = function(event){

    let popup = document.getElementById("welcomePopup");

    if(event.target == popup){

        closePopup();

    }

}
