let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
L.rectangle(bounds, {color: "#001f3f", weight: 5}).addTo(map);
let Marker = L.marker([51.23009, 4.41616]).addTo(map);
Marker.bindPopup("Ons kantoor.").openPopup();