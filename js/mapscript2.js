let map = L.map('apMap').setView([50.89497339065064, 4.341576161516437], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let grens = [[50.8944, 4.3392], [50.8954, 4.3439]];
L.rectangle(grens, {color: "#001f3f", weight: 5}).addTo(map);
// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let Marker = L.marker([50.89497339065064, 4.341576161516437]).addTo(map);
Marker.bindPopup("Atomium.").openPopup();