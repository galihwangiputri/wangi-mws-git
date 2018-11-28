let promise = new Promise(function(resolve, reject) {
//do stuff
let isSuccessful = true;

setTimeout(function(){ //asynchronously setelah 2 detik
    if (isSuccessful) { //Jika berhasil
    resolve('berhasil!');
    }
    else{
      reject(Error("terjadi error"))  //Terjadi error
    }
  }, 2000);
});
promise.then(function(val){
//val merepresentasikan nilai keberhasilan
console.log(val);      // logs "berhasil"
})
.catch(function(val){
//val merepresentasikan nilai penolakan //(rejected)
console.log(val);  //tidak terjadi bila sukses
});
