
const express = require('express');
const requestLogger = require('./requestLogger');

const app = express();
const port = 3009;


app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('Hello, everyone welcome to my page!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});