const express = require('express')
const path = require('path')
const app = express();
const session = require('express-session')
app.use(session({
  secret: 'Secret code',
  resave: false,
  saveUninitialized: true
}))
app.use(express.urlencoded({
  extended: false
}));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'))

app.locals.products = [{
  id: 1,
  type: "computer",
  name: "Dell",
  price : 1200,
  description : "Dell computer Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis voluptates eum, facilis culpa minus iste mollitia qui sit voluptate aut at, nam dolores sunt eveniet commodi labore doloremque accusamus?"
}, {
  id: 2,
  type: "computer",
  name: "HP",
  price : 800,
  description : "hp computer Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis voluptates eum, facilis culpa minus iste mollitia qui sit voluptate aut at, nam dolores sunt eveniet commodi labore doloremque accusamus?"
}, {
  id: 3,
  type: "phone",
  name: "samsung",
  price : 500,
  description : "samsung phone Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis voluptates eum, facilis culpa minus iste mollitia qui sit voluptate aut at, nam dolores sunt eveniet commodi labore doloremque accusamus?"
}]

const shoppingCart = {}

app.get('/', (req, res, next) => {
  res.render('index', {page : "shop"})
})

app.get('/product/:id', (req, res, next) => {
  const item = app.locals.products.find(product => product.id === parseInt(req.params.id))
  res.render('index', {page: "product", item : item})
})

app.post('/addToCart', (req, res, next) => {
  const name = req.query.name
  const price = req.query.price

  if (name in req.session) {
    req.session[name].quantity = parseInt(req.session[name].quantity) + 1
    req.session[name].price = parseInt(req.session[name].price) + parseInt(price)
  } else {
    req.session[name] = {
      name,
      price,
      quantity : 1
    } 
  }
  res.redirect(303, "/shoppingcart")
})

app.get('/shoppingcart', (req, res, next)=> {
  res.render('index', {page: "shoppingcart", cart : req.session})
})

app.listen(3000, ()=> {
  console.log("Server started on port 3000");
})