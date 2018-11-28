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

//---------------------------
//Ambil peta.json dengan fetch
const URL= "peta.json";

fetch(URL)
.then( function(hasil){
  if (hasil.status !=200){
    console.log('Ada Masalah. Status code '+ hasil.status);
    throw hasil.statusText;;
  }
  return hasil.json() //baca file peta.json, tidak pake ';'
})
.then (r =>{
  let places = r.places;
   //simpan data di 'places' dan ubah format json ke string
  localStorage.setItem('places', JSON.stringify(r.places));
})
.catch( function(err){
  console.log(err);
});
//Mengembalikan format json
let places= JSON.parse(localStorage.getItem('places'));
for (var p of places) {
  var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.coffeeshop);
  marker.on('click',showLocation);
}
