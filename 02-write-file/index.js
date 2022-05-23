/* eslint-disable indent */
const fs = require('fs');
const path = require('path');
const process = require('process');

const textPath = path.join('02-write-file', 'text.txt');

process.stdout.write('Write ur text\n');
process.stdin.on('data', (data) => {
    let text = data.toString();
    let writer = fs.createWriteStream(textPath, {flags: 'a'});
    if (text === 'exit\r\n') {
        process.stdout.write('Bye');
        process.exit();
    }
    writer.write(data);
});
process.on('SIGINT', () => {
    process.stdout.write('Bye');
    process.exit();
});
