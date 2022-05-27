const fs = require('fs');

const data = 'Ramya learns Node1';
const options = {
   encoding: 'utf8',
   flag: 'w'
}

fs.writeFile('data.txt', data, options, (err) => {
   if (err) throw err; 
   console.log('The file has been saved!');
});