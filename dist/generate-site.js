const fs = require('fs');

// write the files
const writefile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./index.html", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writefile;