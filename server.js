const express = require('express')
const cors = require('cors')
const db = require('./config/db')
// const companyRoutes = require('./controller/companyController')
const companyRoutes = require('./routes/companyRoutes')

const app = express()
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
db.db()
app.use('/uploads', express.static('uploads'));
app.use('/', companyRoutes)
app.listen(3240)
console.log('http://127.0.0.1:3240')