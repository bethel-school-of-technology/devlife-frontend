<<<<<<< HEAD
const express = require ('express');
const compression = require ('compression');
const path = require ('path');
const app = express ();

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
=======
const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();

app.use(compression());
app.use(express.static(path.join(_dirname, 'build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(_dirname, 'build', 'index.html'));
>>>>>>> master
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});