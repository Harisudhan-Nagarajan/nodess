const fs = require("fs"); //file system

// fs.readFile("./awesome.txt","utf-8",(errr,data)=>{
//     console.log(data);
// });

const quote = "HELLO WORLD!!!";

// fs.writeFile("./cool.txt",quote,(ree)=>{
//     console.log("Completed!!")
// })

const bulkquote = "Live More🤞,Worry Less😎";

//create 10 files in backup
// for(var i =1;i<11;i++){
//     fs.writeFile(`./backup/text-${i}.html`,bulkquote,(ree)=>{
//         console.log("Completed!!")
//     })
// }


//createing files in backup using user input
// const [, , num] = process.argv;

// for(let i =1;i<=num;i++){
//     fs.writeFile(`./backup/text2-${i}.html`,bulkquote,(ree)=>{
//         console.log("Completed!!")
//     })
// }

const filess = fs.readdirSync("./backup");


for (let filename of filess) {
  fs.unlink(`./backup/${filename}`, (ree) => {
    
  });
}
