
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(display);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function display(livelocation) {
    let coordinate = {};

    let latitude = livelocation.coords.latitude;
    let longitude = livelocation.coords.longitude;

    coordinate['lat'] = latitude;
    coordinate['lng'] = longitude;

    // console.log(coordinate);
    initMap(coordinate)
}
// AIzaSyCD1ikZE3_4cJL4 - 1G4GmKuibmxOflI21k
getLocation();


function initMap(cord) {

    const coordinate = cord;

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: coordinate,
    });

    const marker = new google.maps.Marker({
        position: coordinate,
        map: map,
    });
}

window.initMap = initMap;