const fs = require("fs"); //file system built in module(node package) used to interact with files

// creating file
// synchronous - blocking code
// fs.writeFileSync("./syncFile.txt","hellooooo\nhjdhjk");

// async - non-blocking
// fs.writeFile("./hello.txt","helllo",(err)=>{});


// reading a file
// const read = fs.readFileSync("./syncFile.txt","utf-8"); //returns something
// console.log(read);

// fs.readFile("./synFile.txt","utf-8",(err,res)=>{ //doesn't return anything ( needs a callback fn for
//     // error handling)
//     if(err){
//         console.log("err");
//     }
//     else{
//         console.log(res);
//     }
// })

// appending in a file - wil not override
// fs.appendFileSync("./syncFile.txt",new Date().getDate().toLocaleString());
// fs.appendFileSync("./syncFile.txt",`hello ${Date.now()}`);

// copy file
// fs.cpSync("./syncFile.txt",'./new.txt');

// fs.appendFileSync("./new.txt","helooooooooooooooooooooooooooo");

// delete
// fs.unlinkSync("./new.txt");

// check stats
// console.log(fs.statSync("./syncFile.txt"));
// console.log(fs.statSync("./syncFile.txt").isFile());

// make directory
// fs.mkdirSync("hello");
// fs.mkdirSync("hello/a/b",{recursive:true});

// when a request is sent , it is queued in the event queue from where it is checked by event loop(FIFO)
// principle , whether it's blocking(sync) or non-blocking(async). if it's non-blocking , it is processed
// the same time. if it's blocking , it requests for a thread( kinda worker) from the thread pool (by
// default 4 threads(but we can increase their size upto the number of cores(cpu) we have), if the 
// thread is free the process is executed , otherwise it has to wait)

// to check the system cores we can need os module
const os = require('os');
console.log(os.cpus().length); //max threads than can be used


// blocking req
// console.log("1");
// const res = fs.readFileSync("syncFile.txt","utf-8");
// console.log(res); 
// // the below 2 lines will not be executed till the above code is not executed.
// console.log("2");
// console.log("3");

// non-blocking req
// console.log("1");
// fs.readFile("syncFile.txt","utf-8",(err,res)=>{
//     if(err) console.log("err!!");
//     else console.log(res);
// });
// console.log("2");
// console.log("3");