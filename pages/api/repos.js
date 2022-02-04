const fetch = require('isomorphic-unfetch')

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/clqu/repos', {
        headers: {
            'Authorization': 'token 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'
        }
    })).json();

    let __ = await (await fetch('https://api.github.com/users/vcodes-xyz/repos', {
        headers: {
            'Authorization': 'token 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'
        }
    })).json();

    res.send([..._, ...__])
}