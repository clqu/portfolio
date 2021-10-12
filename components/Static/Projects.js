import Head from 'next/head'
import Image from 'next/image'
import swr from '../../library/swr.js'
import Link from 'next/link'

const Experience = () => {
    const { data: projects } = swr('/api/projects')
    const db = projects ? projects : null;
    return <>
        <p className="text-xl font-bold">My Projects & Experiences</p>
        {projects ? (
            <>
        <div className="grid grid-cols-1 mb-3 mt-4 md:grid-cols-3 gap-3">
            {db.slice(0,3).map(project =>
            
            <div className="w-full h-full relative">
                <div key={project.name} className="w-full p-3 bg-base-200 shadow-lg rounded-md transform transition-all duration-200 hover:-translate-y-1.5">

                        <img alt={`${project.name}'s image`} className="w-full rounded-md" src={project.image} />
                        <div className="mt-3">
                        <div className="flex items-center">
                        <h3 className="underline text-xl">{project.name}</h3>                <div data-tip={project.language} class="tooltip-primary shadow-lg ml-1 tooltip">
                            <img alt={`${project.name}'s language image'`} src={project.languageIcon} className=" w-6 h-6" />
                </div>
                </div>
                        <p className="text-gray-300 h-24">{project.description}</p>
                        <a href={project.link}className="bg-gray-700 transition-all duration-200 block text-center p-3 rounded-md hover:bg-gray-800">
                        View <i className="fal fa-arrow-right" />
                        </a>
                        </div>
                </div>
            </div>
            )}
        </div>
                        {db.length > 3 && (
                        <Link href="/projects">
                        <a className="bg-base-200 cursor-pointer transition-all duration-200 block text-center p-3 w-full rounded-md hover:underline mb-7 shadow-lg">
                        View More <i className="fal fa-arrow-right" />
                        </a></Link>
            )}
            </>
        ) : (
            <i className="fas fa-spinner-third fa-spin fa-2x text-center" />
        )}
    </>
}

export default Experience;