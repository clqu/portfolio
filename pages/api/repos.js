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
    try {
        res.send([..._, ...__])
    } catch {
        res.send([])
    }
}
