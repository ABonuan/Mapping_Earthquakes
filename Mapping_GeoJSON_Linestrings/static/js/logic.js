// We create the night navigation view tile layer that will be the default background of our map, using Static Tiles API format.
let night = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-night-v2/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the day navigation view tile layer that will be an option for our map.
let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Day Navigation": day,
    "Night Navigation": night
};

// Create the map object with center, zoom level and default layer.
let map = L.map("mapid", {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [night]
});

// Pass our map layers into our layer control and add the layer control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/ABonuan/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h3>Airline: " + feature.properties.airline + " </h3><hr><h3>Destination: " + feature.properties.dst + "</h3>");
        }
    }).addTo(map);
});
