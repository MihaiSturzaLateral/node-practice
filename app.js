const debug = require('debug')('app:startup')
const config = require('config')
const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express')
const app = express()
const courses = require('./routes/courses')
const home = require('./routes/home')
const logger = require('./middleware/logger')

app.set('view engine', 'pug')
app.set('views', './views') // place all templates in a folder views --> it's by default

app.use(helmet())
app.use(logger)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


app.use('/api/courses', courses);  // for all routes starting with /api/courses, use the courses router
app.use('/', home);

if (app.get('env') === 'development') {
  app.use(morgan('tiny'))
  debug('Morgan enabled...')
}

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))

