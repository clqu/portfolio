import Head from 'next/head'
import Image from 'next/image'
import Repos from '../components/Static/Repos.js'
import Techs from '../components/Static/Techs.js'
import Projects from '../components/Static/Projects.js'
import WhoAmI from '../components/Static/WhoAmI.js'

export default function Home({ repos }) {
    return <>

        <WhoAmI />

        <Projects />
        <Techs />

        <Repos repos={repos} />
    </>
}

Home.getInitialProps = async () => {
    let request = await fetch('https://api.github.com/users/clqu/repos').then(res => res.json())

    return { repos: request }
}