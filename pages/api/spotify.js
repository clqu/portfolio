const fetch = require('isomorphic-unfetch')
 
export default async(req,res) => {
let discord_clqu = await fetch('https://api.lanyard.rest/v1/users/714451348212678658').then(res => res.json())
res.send(discord_clqu)
}