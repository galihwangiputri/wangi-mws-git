let p = Promise.resolve([1,2,3,4]);

p.then (function (parameter){
  console.log(parameter);
});

//fetch arrow
p.then ( (parameter) =>{
  console.log(parameter);
});

//fetch arrow 1 baris
p.then ( parameter => console.log(parameter));

//fetch arrow tanpa oarameter
p.then ( () => console.log("kosong"));

p.then ( parameter => {
  console.log(parameter);
  return (parameter.map( x => x*x))
}).then (hasil => {
  console.log(hasil);
  return hasil.filter (y => y > 10);
}).then (hasil2 => {
  console.log(hasil2);
  return "---" + hasil2.toString() + "---";
}).then(hasil3 => console.log(hasil3)
).catch( err => console.log(err));
