 import {createReadStream} from 'fs'

//  const stream =  createReadStream('./data.txt', {highWaterMark:50000})
//  stream.on('data' ,(data) =>{
//     console.log(data);
//  })
const stream =  createReadStream('./data.txt', {encoding:"utf8"})
stream.on('data' ,(data) =>{
   console.log(data);
})