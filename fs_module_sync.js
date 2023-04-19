const fs = require("fs");


let data = 'file system sync';

fs.writeFileSync('fsSync.txt',data)