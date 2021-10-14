import Head from 'next/head'
import Image from 'next/image'
import swr from '../../lib/swr.js'
import Link from 'next/link'
const Repos = () => {
    const { data: repos } = swr('/api/repos')
    const db = repos ? repos : null;
    return <>
    <p className="text-xl font-bold mt-10">Github Repositories</p>
    <div className="grid grid-cols-1 mb-10 mt-4 md:grid-cols-4 gap-3">
    { repos ? (
        <>
    {db.filter(a => a.stargazers_count > 0).sort((a,b) => b.stargazers_count - a.stargazers_count).map(repo => (
    
        <a href={`https://github.com/${repo.full_name}`} className="w-full p-4 bg-base-200 shadow-lg rounded-md transform transition-all duration-200 hover:-translate-y-1.5 text-sm">
        {repo.name}<span className="text-gray-300 text-xs ml-2">{repo.full_name}</span>
        <div className="right-0 bottom-0">
        <i className="fal fa-star" />&nbsp;{repo.stargazers_count}
        <i className="fal fa-code-branch ml-2" />&nbsp;{repo.forks_count}
        </div>
        </a>
    ))}
    </>
    ) : (
            <i className="fas fa-spinner-third fa-spin fa-2x text-center" />

    )}
    </div>
    </>
}

export default Repos;
