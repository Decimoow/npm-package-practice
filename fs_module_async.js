const fs = require('fs');

var text = 'hey soul'

fs.readFile('refresher.txt','utf-8', (error, data) =>{
    if (error){
        console.log(error)
    }
    console.log("goodshit "+data)
})