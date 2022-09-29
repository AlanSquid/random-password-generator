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
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password, options })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})