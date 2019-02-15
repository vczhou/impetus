console.log("Your name is: " + localStorage.getItem("name"))

getTime()
getMantra()
getName()
getImage()

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


// document.getElementById("delete_button").addEventListener("click", deleteListItem);
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

var verse_map = {
    "Phillipians 4:13":  "I can do all things through him who strengthens me.",
    "Joshua 1:9": "Be strong and courageous. Do not be frightened, and do not be dismay, for the LORD your God is with you wherever you go.",
    "Lamentations 3:22-23": "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    "Proverbs 18:10": "The name of the LORD is a strong tower; the righteous man runs into it and is safe.",
    "Psalm 16:8": "I have set the LORD always before me; because he is at my right hand, I shall not be shaken.",
    "Psalm 23:4": "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    "Psalm 55:22": "Cast your burden on the LORD, and he will sustain you; he will never permit the righteous to be moved.",
    "Psalm 62:6": "He alone is my rock and my salvation, my fortress; I shall not be shaken.",
    "Psalm 120:1": "In my distress I called to the LORD, and he answered me.",
    "Isaiah 26:3": "You keep him in perfect peace whose mind is stayed on you, because he trusts in you.",
    "Mark 10:27": "Jesus looked at them and said, \"With man it is impossible, but not with God. For all things are possible with God.\"",
    "1 Thessalonians 5:11": "Therefore encourage one another and build one another up, just as you are doing.",
    "Phillipians 4:9": "And my God will supply every need of yours according to his riches in glory in Christ Jesus.",
    "1 Peter 5:7": "Casting all your anxieties on him, because he cares for you."
}
getVerse(verse_map)

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
    var newItem = document.createElement("P")
    var label = document.createElement("label")
    var itemText = document.createElement("span")
    var checkbox = document.createElement("input")
    // var deleteButton = document.createElement("button")
    checkbox.type = "checkbox"
    // button.innerText = "delete"
    itemText.innerText = listItem
    label.appendChild(checkbox)
    label.appendChild(itemText)
    // label.appendChild(deleteButton)
    newItem.appendChild(label)

    console.log(newItem)
    list.insertBefore(newItem, list.children[list.children.length-1]);
    document.getElementById(itemID).value = ""
}

// function deleteListItem() {
//     var list = document.getElementById(listID)
// }

function getVerse(verse_map) {
    var len = Object.keys(verse_map).length
    var rand = Math.floor(Math.random()*len)
    var v = verse_map[rand]
    var loc = Object.keys(verse_map)[rand]
    document.getElementById('verse_loc').innerHTML = loc
    var verse = Object.values(verse_map)[rand]
    document.getElementById('verse').innerHTML = verse
}

function getImage() {
    var today = new Date();
    // var day = Math.floor(today / (24*60*60*1000));
    var day = today.getDate();
    // TODO: figure out how to not hard code this
    var num_pictures = 8;
    var pic = day % num_pictures;
    var photo_url = "../images/bkgd/000" + pic + ".jpg"
    document.getElementById('bkgd').style.backgroundImage = 'url(' + photo_url + ')' 
}

