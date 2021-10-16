const express = require('express');
const path = require('path')
const app = express();
const body = (css, content) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./styles/${css}">
      <title>form-day-night</title>
  </head>
  <body>
    ${content}
  </body>
  </html>
  `
}
const form = `<form id="sub_id" action="/result" method="post">
<label>Name: <input id="name" name="name" type="text"></label>
<label>Age: <input id="age" name="age" type="text"></label>
<input type="submit" value="Submit Query">
</form>`

const getCss = () => {
  const date = new Date();
  const hour = date.getHours();
  return hour > 6 && hour < 18 ? 'dayTime.css' : 'nightTime.css';
}

app.use(express.urlencoded({
  extended: false
}));
app.use('/styles', express.static(path.join(__dirname, 'styles')));

app.get('/', (req, res) => {
  res.send(body(getCss(), form));
});

app.post('/result', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(body(getCss(), `<h2>Welcome ${name}, you are ${age} years old</h2>`));
});


app.listen(3000);