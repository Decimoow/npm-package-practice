const os = require('os')
const osMod = {
    name:os.type(),
    release:os.release(),
    platform:os.platform(),
    freemem:os.freemem()
}
module.exports = osMod.name