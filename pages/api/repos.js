const fetch = require('isomorphic-unfetch')
const _ = require('lodash');

export default async(req,res) => {
let clqu_repos = await fetch('https://api.github.com/users/clqu/repos').then(res => res.json())
let vcodes_repos = await fetch('https://api.github.com/users/vcodes-xyz/repos').then(res => res.json())

res.send(_.isEqual(clqu_repos, vcodes_repos))
}
