console.log("Your name is: " + localStorage.getItem("name"))

getTime()
getMantra()
getName()

document.getElementById("todo_item").addEventListener("keydown", function(e) {
    if (!e) { var e = window.event; }

    // Enter is pressed
    if (e.keyCode == 13) { addListItem("todo_list", "todo_item"); }
}, false);

document.getElementById("prayer_item").addEventListener("keydown", function(e) {
    if (!e) { var e = window.event; }

    // Enter is pressed
    if (e.keyCode == 13) { addListItem("prayer_list", "prayer_item"); }
}, false);


document.getElementById("settings_button").addEventListener("click", goToSettings);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge: 'right'});
});
// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// var instance = M.Tabs.init(tabs_el);
var tab_elem = document.querySelector('.tabs');
var options = {}
var tabs_instance = M.Tabs.init(tab_elem, options);

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

function addListItem(listID, itemID) {
    var list = document.getElementById(listID)
    var listItem = document.getElementById(itemID).value
    console.log("Attempting to add ")

                // <p>
                //   <label>
                //     <input type="checkbox" class="filled-in" checked="checked" />
                //     <span>Task</span>
                //   </label>
                // </p>
    var newItem = document.createElement("P");
    var itemText = document.createElement("span");
    newItem.appendChild(itemText)

    list.appendChild(newItem);
}
