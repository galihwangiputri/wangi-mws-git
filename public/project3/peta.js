/*
File : peta.js dengan fetch JSON
 */
 //View Area Maps
 var mymap = L.map('mapid').setView([-7.7545436,110.4043733,13], 14);
 L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
     maxZoom: 18,
     id: 'mapbox.streets',
     accessToken: 'pk.eyJ1IjoiZ2FsaWh3YW5naSIsImEiOiJjam8wYWx2YWMwdDIzM3ZsajB5dDdncXNhIn0.zAghIegcPcd7SKFUE7uQZA'
 }).addTo(mymap);
 
function findLocation(x,y){
  //console.log(x,y);
  for (var i=0; i<places.length; i++){
    if (places[i].lokasi[0]==x && places[i].lokasi[1]==y){
      return i;
    }
  }
  return -1;
}

function showLocation(e){
  //console.log("you clicked "+ e.latlng.lat +" dan "+ e.latlng.lng);
  let ix = findLocation(e.latlng.lat, e.latlng.lng);
  if(ix >= 0){
    img.src= places[ix].gambar;
    par.textContent= places[ix].review;
  }
}

let gmb = document.getElementById("gmb");
let rev = document.getElementById("review");
let img = document.createElement('img');
let par = document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

let r0= "Good place, good ambience, good service as well.";
let r1= "Nice place, good atmosphere, good music, good service.";
let r2= "Fast service, clean place, WiFi available";
let r3= "The place is nice, clean and cozy. Then the beverages is also good. However, the internet is a bit weak. This place can be your choice to chill out or to do your tasks.";
let r4= "Cheap and suitable for doing the homework or just have a chit chat with your friends. The panekoek is so delicious!";


let places= [
    {"lokasi": [-7.756292, 110.393130], "coffeeshop" : "Kaktus Coffee Place",
"gambar":"../images/kaktus.jpg", "review":r0},
    {"lokasi": [-7.758144, 110.391981], "coffeeshop" : "Ekologi Desk & Coffee",
  "gambar":"../images/ekologi.jpg", "review":r1},
    {"lokasi": [-7.746232, 110.412478], "coffeeshop" : "Cha Cha Milk Tea",
  "gambar":"../images/chacha.jpg", "review":r2},
    {"lokasi": [-7.748798, 110.411551], "coffeeshop" : "EPLUS (coffee.internet.event)",
  "gambar":"../images/eplus.jpg", "review":r3},
    {"lokasi": [-7.766757, 110.405802], "coffeeshop" : "Loops",
  "gambar":"../images/loops.jpg", "review":r4}
];

for (var p of places) {
  var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.coffeeshop);
  marker.on('click',showLocation);
}
