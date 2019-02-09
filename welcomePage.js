openDashboard()

document.getElementById("welcome").addEventListener("keydown", function(e) {
    if (!e) { var e = window.event; }
    // e.preventDefault(); // sometimes useful

    // Enter is pressed
    if (e.keyCode == 13) { setGreeting(); }
}, false);

function openDashboard() {
	if (localStorage.getItem("name") != null) {
		window.open("tabPage.html",'_self') 
	}
}

function setGreeting() {
	var name = document.getElementById("welcome").value
	console.log("Hello " + name)
	localStorage.setItem("name", name)

	// How to retrieve the name
	var storedName = localStorage.getItem("name")
	console.log("storedName: " + storedName)

	openDashboard()
}
