  
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

export default function SWR(url) {
    return useSWR(url, (href) => fetch(href, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json' 
    }
    }).then(res => res.json())
    );
};