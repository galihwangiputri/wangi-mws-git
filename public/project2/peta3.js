//View Area Maps
var mymap = L.map('mapid').setView([-7.7545436,110.4043733,13], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZ2FsaWh3YW5naSIsImEiOiJjam8wYWx2YWMwdDIzM3ZsajB5dDdncXNhIn0.zAghIegcPcd7SKFUE7uQZA'
}).addTo(mymap);

//Marker Satu Lokasi
/*
let lokasi = [-8.701660,115.169856];
let sponsor = "Restoran Spanyol";
let marker = L.marker(lokasi).addTo(mymap).bindPopup(sponsor);
*/

//Marker Banyak Lokasi
let places= [
    {"lokasi": [-7.756292, 110.393130], "coffeeshop" : "Kaktus Coffee Place"},
    {"lokasi": [-7.758144, 110.391981], "coffeeshop" : "Ekologi Desk & Coffee"},
    {"lokasi": [-7.746232, 110.412478], "coffeeshop" : "Cha Cha Milk Tea"},
    {"lokasi": [-7.748798, 110.411551], "coffeeshop" : "EPLUS (coffee.internet.event)"},
    {"lokasi": [-7.766757, 110.405802], "coffeeshop" : "Loops"}
];
for (var p of places) {
  var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.coffeeshop);
}

//Gambar
let gmb = document.getElementById('gmb');
let img = document.createElement('img');
gmb.appendChild(img);
img.src = "../images/kaktus.jpg";

//komentar
/*
let komen = "resto paling enak";
let par = document.getElementById('review');
let teks = document.createElement('p');
par.appendChild(teks);
//teks.innerHTML = "ko<b>men</b>";
teks.innerHTML = komen;
*/

//Gambar fit div
(function gbrfitdiv() {

var img = document.getElementById('gmb').firstChild;
img.onload = function() {
  if(img.height > img.width) {
      img.height = '100%';
      img.width = 'auto';
  }
};
}());
