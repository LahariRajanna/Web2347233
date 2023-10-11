const fs = require('fs');
const path = require('path');

fs.unlink(path.join(__dirname, '/posts', 'blogPost.txt'), (err) => {
    if (err) {
        console.log('no such file present');
        return;
    }
    console.log('file deleted');
});