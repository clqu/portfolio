import Head from 'next/head'
import Image from 'next/image'
import swr from '../../lib/swr'
export default function Home() {
    const items = [
        { icon: 'fab fa-spotify', link: 'https://open.spotify.com/user/2ln4q9hmq16bji4c1uva0ntgc' },
        { icon: 'fab fa-instagram', link: 'https://instagram.com/this.clqu' },
        { icon: 'fab fa-github', link: 'https://github.com/clqu' },
        { icon: 'fab fa-discord', link: 'https://discord.com/users/714451348212678658' },
    ]
    return <>
<div className="navbar p-0 border-b border-base-200/50 text-neutral-content mb-5">
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
        <iframe src="https://linkcord.swoth.xyz/api/v1/widget/714451348212678658?type=spotify&theme=dark&align=left&lang=en&bg=090909" className="w-full rounded-lg mb-4" height="140" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </>
}
