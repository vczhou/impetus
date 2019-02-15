getImage()

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
