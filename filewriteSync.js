const fs = require('fs');

const data = 'Hey there! I am learning Node.js';

const options = {
   encoding: 'utf8',
   flag: 'w'
}

try {
    fs.writeFileSync('datasync.txt', data, options);
} catch(err) {
    console.log("Its an error");
    throw err;
}