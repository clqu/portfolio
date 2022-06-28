let key1 = 'ghp_Kd2pLB3SawHKAjL';
let key2 = 'P3XMzhstavW0B1s1zl70H';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/developercity0/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();

    let __ = await (await fetch('https://api.github.com/users/Kolay-Degil/repos', {
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
