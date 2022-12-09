const crypto = require('node:crypto');
//TODO ------- PASS -----
const secret = 'abc';
const secret2 = 'abc'
//TODO ------- CLEF DE HASH -----
const clefCrypt= 'key'
//TODO ------- ASHAGE -----
const hash = crypto.createHmac('sha256', secret)
    .update(clefCrypt)
    .digest('hex');
    
    // secret (hashé) = 9d28704fef5d80343e0414af684ab7422164f6ba4751c700d072406cd37c10ed

const hash2 = crypto.createHmac('sha256', secret2)
    .update(clefCrypt)
    .digest('hex');
    
//TODO ------- VERIFICATION-----
console.log(hash === hash2);
