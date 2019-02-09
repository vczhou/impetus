console.log("HELLO")
getTime()

let myPopover = document.getElementById('myPopover')

function getTime() {
    console.log("inside time");
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ":" + minutes;
    var t = setTimeout(getTime, 500);
    document.getElementById('clock').innerText = strTime;
}
