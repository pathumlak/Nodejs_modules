// blocking code
// console.log('start');
// alert('block')
// console.log('end');

//non blocking code
// console.log('start');
// setTimeout(() =>{
//     alert('non-blocking')
// },1000)


// console.log('end');

//without callback
// import fs from 'fs';

// console.log('first');
// let data = fs.readFileSync("test.txt");
// console.log(data.toString());

// console.log("end");

//with callback
import fs from 'fs';

console.log("start");

 fs.readFile("test.txt","utf-8" , (err, res) =>{
    err ? console.log(err):console.log(res);
})