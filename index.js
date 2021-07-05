const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();


const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json')
    fs = require('fs')

client.login(config.token)
client.commands = new Discord.Collection()

const hook = new Discord.WebhookClient('861550710772465665', 'y66cfGImzK9LGk9_t99SJND2lOrX9BbhrjY-T0_FcGh8a-GaiS4k60wlbHN2l2sQyvSE');

// fs.readdire('./commands', (err, files) => {
//     if (err) throw err
//     files.forEach(file => {
//         if(!file.endsWith('.js')) return
//         const command = require(`./commands/${file}`)
//         client.commands.set(commande.name, command)
//     })
// })

// client.on('message', message => {
//     if(message.type !== "DEFAULT" || message.author.bot) return
//     const args = message.content.trim().split(/ +/g)
//     const comandName = args.shift().toLowerCase()
//     if(!comandName.startsWith(config.prefix)) return
//     const command = client.commands.get(commandName.slice(config.prefix.length))
//     if(!command) return
//     command.run(message, args, client)
// })

// app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true, limit: '60mb' }));
app.use(bodyParser.json({ limit: '60mb' }));
app.use(cors());

app.post('/', function(req, res) {
    console.log('coucou')
    hook.send('@Himoko')
})

app.get('/', function(req, res) {
    console.log('alive');
    res.send('alive');
})
app.listen(3000);
console.log('running on' + 3000)