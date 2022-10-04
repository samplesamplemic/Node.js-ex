//const repl = require('node:repl');
//repl.start('>global.crypto')

// 1)
// const crypto = require('crypto');
// const id = crypto.randomBytes(16).toString('hex');
// console.log(id);

// 2)
const {randomUUID} = require('crypto');
console.log(randomUUID());