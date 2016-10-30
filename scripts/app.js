var myMap = L.map('mapid').setView([40.7607800, -111.8910500], 13);
// var myMap = L.map('mapid').fitWorld();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'joniweiss.1ppn3khd',
    accessToken: 'pk.eyJ1Ijoiam9uaXdlaXNzIiwiYSI6ImNpdXd5a2JzMDA0cHQydGwxdWZjZ2kwY3oifQ.-RTWw8Wn5Msm-v19PneOPw'
}).addTo(myMap);


myMap.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(myMap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(myMap);
}

myMap.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

myMap.on('locationerror', onLocationError);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(myMap);
}

myMap.on('click', onMapClick);
