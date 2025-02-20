let app = require('express');
let path = require('path');
let server = app();
let StaticPath = path.join(__dirname, 'public');


server.use(app.static(StaticPath));

server.get('/', (req, res) => {
    res.sendFile(path.join(StaticPath));
});

server.get('/about', (req, res) => {
    res.sendFile(path.join(StaticPath, 'about.html'));
});



server.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);