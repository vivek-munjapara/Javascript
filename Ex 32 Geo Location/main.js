// let key = "AIzaSyCD1ikZE3_4cJL4-1G4GmKuibmxOflI21k";

// function showPosition(position) {
//     let latlon = position.coords.latitude + "," + position.coords.longitude;

//     let img_url = `https://maps.googleapis.com/maps/api/staticmap?center=
//     "+latlon+"&zoom=14&size=400x300&sensor=false&key=${key}`;

//     document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";
// }

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// getLocation();


// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;