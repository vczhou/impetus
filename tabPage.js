console.log("Your name is: " + localStorage.getItem("name"))

getTime()
getMantra()
getName()

document.getElementById("settings_button").addEventListener("click", goToSettings);

let myPopover = document.getElementById('myPopover')

function getTime() {
    var time = new Date()
    var hours = time.getHours()
    var minutes = time.getMinutes()
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    var strTime = hours + ":" + minutes
    var t = setTimeout(getTime, 500)
    document.getElementById('clock').innerText = strTime
}

function getMantra() {
    var date = new Date()
    var hours = date.getHours()
    var mantra = "";
    if (hours < 12) {
        mantra = "Good Morning"
    } else if (hours < 17) {
        mantra = "Good Afternoon"
    } else {
        mantra = "Good Evening"
    }
    document.getElementById('mantra').innerHTML = mantra + ", "
}

function getName() {
	var name = localStorage.getItem("name")
	document.getElementById('name').innerHTML = name + "."
}

function goToSettings() {
		window.open("settings.html",'_self') 
}
