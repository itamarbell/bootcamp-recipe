const express = require('express')
const router = express()
const teams = require('../teams')
const request = require('request')

router.get('/teams/:teamname', function (req, res) {
    request('http://data.nba.net/10s/prod/v1/2018/players.json',
        function (error, response, body) {
            const prase = JSON.parse(body || "{}")
            const teamID = teams[req.params.teamname]
            const nbaTeam = prase.league.standard.filter(p => p.teamId == teamID && p.isActive == true)
            const players = nbaTeam.map(p =>{return{firstName: p.firstName, lastName: p.lastName, jersey: p.jersey, pos: p.pos}})
            res.send(players)
        })
})



module.exports = router