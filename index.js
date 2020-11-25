const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const router = require('./routes')
const imageModel = require('./models/Image')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('views', path.join(__dirname, '/views/'))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, '/public/')))
app.use('/', router)

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server listening at port: ${PORT}`))