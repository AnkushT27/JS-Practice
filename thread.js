const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    console.log('1: ',Date.now()-start) //604
})

crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    console.log('2: ',Date.now()-start) //611
})