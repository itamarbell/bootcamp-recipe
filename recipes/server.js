const express = require('express')
const app = express()
const port = 8080
const path = require('path')
const request = require('request')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function (req, res) {
    res.send("OK")
})

app.get('/recipes/:ingredient', function (req, res) {
    ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,
        function (error, response, body) {
            const prase = JSON.parse(body || "{}")
            map = prase.results.map(i =>{return{ingredients: i.ingredients, title: i.title, thumbnail: i.thumbnail, href: i.href}})
            
            res.send(map)

        })
})

app.listen(port, () => console.log(`Running server on port ${port}`))

