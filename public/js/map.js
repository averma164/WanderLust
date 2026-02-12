
const map = new maplibregl.Map({
    container: 'map',
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
    center: coordinates, // Delhi
    zoom: 9
});

console.log(coordinates);
new maplibregl.Marker({
    color: "#000",
    draggable: true
})
.setLngLat(coordinates)
.addTo(map);
