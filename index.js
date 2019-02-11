var fs = require('fs');

function listDirContent(dirPath) {
    dirPath = dirPath || '.'
    fs.readdir(dirPath, writeData)

    function writeData(err, files) {
        if (err) {
            console.log(err);
        } else {
            var data = files.join('\n');
            fs.writeFile('dircontent.txt', data, function (err) {
                if (err) console.log(err);
            })
        }
    }

}

listDirContent();