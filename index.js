const express = require('express');
const Server = require('http').Server;
const path = require('path');

const app = express();
const http = Server(app);

app.use(express.static(path.join(__dirname, 'static'), {
  extensions: ['html', 'js', 'jsx']
}));

const port = process.env.PORT || 3002;
http.listen(port, function() {
  console.log('Running on ' + port);
});
