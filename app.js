const express = require('express')
const app = express()
const port = 3000
const generatePassword = require('./generate_password.js')


const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const password = generatePassword(req.body)
  res.render('index', { password })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})