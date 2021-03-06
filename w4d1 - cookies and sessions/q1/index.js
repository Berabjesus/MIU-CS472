const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'))
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.render('index', {
    cookies : req.cookies
  })
})

app.post('/', (req, res)=> {
  let key = req.body.key
  let value = req.body.value
  res.cookie(key, value)
  res.redirect(303, '/')
})

app.listen(3000, ()=> {
  console.log('running on port 3000');
})