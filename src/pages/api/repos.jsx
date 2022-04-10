let key1 = 'ghp_ZoiPGkJIqWwxA';
let key2 = '5whtJO5NJLbX0jWOF3qSd0C';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/clqu/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();

    let __ = await (await fetch('https://api.github.com/users/vcodes-xyz/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();
    
    let ___ = await (await fetch('https://api.github.com/users/VoidDevsOrg/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();
    
    try {
        res.send([..._, ...__, ...___])
    } catch {
        res.status(500);
    }
}
