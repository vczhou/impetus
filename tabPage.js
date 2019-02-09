console.log("Your name is: " + localStorage.getItem("name"))

let myPopover = document.getElementById('myPopover')

if (myPopover !== null) {
	myPopover.onclick = function(element) {
		element.popover('show')
	};
}




