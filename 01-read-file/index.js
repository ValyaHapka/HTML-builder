/* eslint-disable indent */
const fs = require('fs');
const path = require('path');
const process = require('process');

const text = path.join('01-read-file', 'text.txt');
const result = fs.createReadStream(text);

result.on('readable', () => {
    let r = result.read();
    if (r === null) {
        r = '';
    }
    process.stdout.write(r.toString());
});
