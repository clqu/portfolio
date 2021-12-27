import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr.js'
import Link from 'next/link'

const Experience = () => {
    const { data: projects } = swr('/api/projects')
    const db = projects ? projects : null;
    return <>
        <Link href="/"><p className="btn btn-ghost mb-5 mr-2 cursor-pointer"><i className="fal fa-home fa-2x mr-1" /> Home</p></Link>
        
        <p className="text-xl font-bold">My Projects & Experiences</p>
        {projects ? (
            <>
        <div className="grid grid-cols-1 mb-3 mt-4 md:grid-cols-3 gap-3">
            {db.map(project =>
            
            <div className="w-full h-full relative">
                <div key={project.name} className="w-full p-3 bg-base-200 shadow-lg rounded-md transform transition-all duration-200 hover:-translate-y-1.5">
                        <img alt={`${project.name}'s image`} className="w-full rounded-md h-32" src={project.image} />
                        <div className="mt-3">
                        <div className="flex items-center">
                        <h3 className="underline text-xl">{project.name}</h3>                <div data-tip={project.language} class="tooltip-primary shadow-lg ml-1 tooltip">
                            <img alt={`${project.name}'s language image'`} src={project.languageIcon} className="w-6 h-6" />
                </div>
                </div>
                        <p className="text-gray-300 h-32">{project.description}</p>
                        <a href={project.link}className="bg-base-500 transition-all duration-200 block text-center p-3 rounded-md hover:bg-gray-800">
                        View <i className="fal fa-arrow-right" />
                        </a>
                        </div>
                </div>
            </div>
            )}
        </div>
            </>
        ) : (
            <i className="fas fa-spinner-third fa-spin fa-2x text-center" />
        )}
    </>
}

export default Experience;
