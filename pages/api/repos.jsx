const fetch = require('isomorphic-unfetch')

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/clqu/repos', {
        headers: {
            Authorization: 'token '+process.env.API_KEY
        }
    })).json();

    let __ = await (await fetch('https://api.github.com/users/vcodes-xyz/repos', {
        headers: {
            Authorization: 'token '+process.env.API_KEY
        }
    })).json();
    
    let ___ = await (await fetch('https://api.github.com/users/VoidDevsOrg/repos', {
        headers: {
            Authorization: 'token '+process.env.API_KEY
        }
    })).json();
    
    try {
        res.send([..._, ...__, ...___])
    } catch {
        res.status(500);
    }
}
