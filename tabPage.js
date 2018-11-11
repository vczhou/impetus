console.log("HELLO")

let myPopover = document.getElementById('myPopover')

myPopover.onclick = function(element) {
	element.popover('show')
};
