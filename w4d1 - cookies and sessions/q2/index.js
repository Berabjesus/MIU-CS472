const express = require('express')
const path  = require('path')
const session = require('express-session')
const app = express()
app.use(session({
  secret: 'Secret code',
  resave: false,
  saveUninitialized: true
}))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'))
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use(express.urlencoded({
  extended: true
}))
app.get('/', (req, res) => {
  const date = new Date();
  res.render("index", {
    time: date.toTimeString(),
  });
});

app.post('/result', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  req.session.name = name
  req.session.age = age
  res.redirect('/output');
});

app.get('/output', (req, res) => {
  res.render('output', {
    name : req.session.name,
    age : req.session.age
  })
  console.log(req.session);
  res.render('output')
});

app.listen(3000)