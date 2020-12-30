// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the Austin-Bergstrom airport.
let map = L.map("mapid").setView([30.1900, -97.6687], 5);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [30.1900, -97.6687],
    [43.6777, -79.6248],
    [40.6413,-73.7781]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "#6E99F5",
    weight: 4,
    dashArray: "10, 10"
}).addTo(map);

// We create the tile layer that will be the background of our map, using Static Tiles API format.
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    opacity: 0.5,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
