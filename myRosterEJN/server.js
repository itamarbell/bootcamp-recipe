const express = require('express')
const app = express()
const api = require('./server/api')
const port = 3000
const path = require('path')
const teams = require('./teams')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use('/', api)

app.listen(port, () => console.log(`Running server on port ${port}`))

