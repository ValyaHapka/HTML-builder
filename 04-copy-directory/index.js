/* eslint-disable indent */
const fs = require('fs');
const path = require('path');

const dirPath = path.join('04-copy-directory', 'files-copy');
const filesPath = path.join('04-copy-directory', 'files');

fs.mkdir(dirPath, {recursive: true}, (err) => {
    if (err) {
        console.error(err);
    }
});
fs.readdir(filesPath, {withFileTypes: true}, (err, list) => {
    if (!err) {
        list.forEach(e => {
            fs.copyFile(`${filesPath}/${e.name}`, `${dirPath}/${e.name}`, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    }
});

