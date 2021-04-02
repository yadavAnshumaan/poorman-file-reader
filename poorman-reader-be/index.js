const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    const queryParams = req.query;
    let path = './../../../Desktop';
    if (queryParams.path) {
        path = queryParams.path;
    }
    try {
        if (fs.lstatSync(path).isDirectory()) {
            const dir = fs.readdirSync(path).map(entry => {
                return {entry, isDirectory: fs.lstatSync(path + '/' + entry).isDirectory(), size: fs.lstatSync(path + '/' + entry).blksize * fs.lstatSync(path + '/' + entry).blocks}
            });
            res.json({ dir, path });
        } else {
            const fileData = String.fromCharCode.apply(null, fs.readFileSync(path));
            res.json({ dir: [], data: fileData, path });
        }
    } catch(err) {
        res.status(400).json({err})
    }
});

const server = app.listen(4300, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Server start at http://%s:%s', host, port);
})
