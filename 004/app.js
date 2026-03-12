const fs = require('fs');

//criar pasta síncrona
//fs.mkdirSync('logs');

//criar pasta assíncrona
// fs.mkdir('logs2',(err)=>{
//     if(err){
//         console.log(err);
//     }
// });

//remover pasta
if(fs.existsSync('./logs')){
    fs.rmdirSync('./logs');
}

console.log("Fim");