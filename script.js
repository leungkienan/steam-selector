const SteamAPI = require('steamapi')
const steam = new SteamAPI('steam token')

steam.resolve('https://steamcommunity.com/id/kienanl')
    .then((id) => {
    console.log(id) // 76561198146931523
})
