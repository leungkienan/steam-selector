const SteamAPI=require('steamapi')

const steam = new SteamAPI('steam token')

steam.resolve('https://steamcommunity.com/id/kienanl').then(id=>{
    console.log(id)
})

steam.getUserSummary('FCDD6C175E80E02257338C5D676239BD').then(summary =>{
    console.log(summary)
})