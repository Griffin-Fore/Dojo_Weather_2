console.log("loaded");

function weatherAlert() {
    alert("Loading weather report");
}

function hide() {
    elementToRemove = document.querySelector(".pop-up");
    elementToRemove.remove();
}

var todayTempHigh = document.querySelector("#today-temp-high");
var todayTempLow = document.querySelector("#today-temp-low");
var tomorrowTempHigh = document.querySelector("#tomorrow-temp-high");
var tomorrowTempLow = document.querySelector("#tomorrow-temp-low");
var fridayTempHigh = document.querySelector("#friday-temp-high");
var fridayTempLow = document.querySelector("#friday-temp-low");
var saturdayTempHigh = document.querySelector("#saturday-temp-high");
var saturdayTempLow = document.querySelector("#saturday-temp-low");

function tempChange() {
    if(todayTempHigh.innerText == "75") {

        todayTempHigh.innerText = "23";
        todayTempLow.innerText = "18";
        tomorrowTempHigh.innerText = "26";
        tomorrowTempLow.innerText = "18";
        fridayTempHigh.innerText = "20";
        fridayTempLow.innerText = "16";
        saturdayTempHigh.innerText = "25";
        saturdayTempLow.innerText = "21";

    }
    else {
        todayTempHigh.innerText = "75";
        todayTempLow.innerText = "65";
        tomorrowTempHigh.innerText = "80";
        tomorrowTempLow.innerText = "66";
        fridayTempHigh.innerText = "69";
        fridayTempLow.innerText = "61";
        saturdayTempHigh.innerText = "78";
        saturdayTempLow.innerText = "70"
    }
}