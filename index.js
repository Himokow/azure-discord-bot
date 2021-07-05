const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();


const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    })

const hook = new Discord.WebhookClient('861515217878908949', 'MrUHVL0TJQKz9O2Q2lyUnnRA1PmBfZFBZY9EmW3zjZitd98NIHdwwKjxRsc7o63TAJR8');

app.use(bodyParser.urlencoded({ extended: true, limit: '60mb' }));
app.use(bodyParser.json({ limit: '60mb' }));
app.use(cors());

app.post('/', function(req, res) {
    // console.log(req.body)
    if(req.body.message.text.includes('To review')){
        hook.send(req.body.message.markdown + '\r\n' + '<@&843792619515543583> Rendez-vous sur la dev : https://datamarketplace-dev.atoscamp.net/#/')
    }
    res.send();
})

app.get('/', function(req, res) {
    console.log('alive');
    res.send('alive');
})
app.listen(process.env.PORT || 3000);
console.log('running on' + 3000)