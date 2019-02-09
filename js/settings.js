document.getElementById("back_button").addEventListener("click", goToSettings);
document.getElementById("update_button").addEventListener("click", changeName);

function goToSettings() {
	window.open("tabPage.html",'_self') 
}

function changeName() {
	var name = document.getElementById("name_field").value
	localStorage.setItem("name", name)
}
