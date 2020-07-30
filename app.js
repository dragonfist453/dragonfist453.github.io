const express = require('express')
const app = express()
const port = 5000

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))