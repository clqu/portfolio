const fetch = require('isomorphic-unfetch')

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/clqu/repos', {
        headers: {}
    })).json();

    let __ = await (await fetch('https://api.github.com/users/vcodes-xyz/repos', {
        headers: {}
    })).json();
    try {
        res.send([..._, ...__])
    } catch {
        res.send([])
    }
}
