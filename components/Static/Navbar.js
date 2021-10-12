import Head from 'next/head'
import Image from 'next/image'
import swr from '../../library/swr'
export default function Home() {
    const items = [
        { icon: 'fab fa-spotify', link: 'https://open.spotify.com/user/2ln4q9hmq16bji4c1uva0ntgc' },
        { icon: 'fab fa-instagram', link: 'https://instagram.com/this.clqu' },
        { icon: 'fab fa-github', link: 'https://github.com/clqu' },
        { icon: 'fab fa-discord', link: 'https://discord.com/users/714451348212678658' },
    ]
    const { data: db } = swr('/api/spotify')
    const spotify = db ? (db.data ? (db.data.spotify ? db.data.spotify : null) : null) : null;
    return <>
<div className="navbar p-0 bg-base-300 border-b border-base-200 text-neutral-content mb-5">
        <div className="navbar-start">
          <span className="text-lg font-bold">
            clqu.live
          </span>
        </div> 
        <div className="navbar-end">
        <div className="flex items-center right-0">
          {items.map(item => (
          <a href={item.link} className="btn btn-square btn-ghost mr-2">
            <i className={`${item.icon} fa-2x`} />
          </a> 
          ))}
        </div>


      </div>
        </div>
        {spotify && (
        <div className="p-2 mb-10 bg-base-200 rounded-md shadow-lg">
        <div className="flex items-center">
        <img className="w-16 h-16 rounded-md" src={spotify.album_art_url} />
        <div className="ml-2">
            <p className="opacity-50 text-sm uppercase">i currently listening on spotify</p>

            <p>{spotify.song}</p>
            <p className="opacity-75">{spotify.artist}</p>
        </div>
        </div>
        </div>
        )}
    </>
}
