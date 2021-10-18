const express = require('express');
const path = require('path');
const app = express();
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
  const date = new Date("3/16/2011 3:49:37 PM");
  res.render("index", {
    time: date.toTimeString(),
  });
});
app.listen(3000);