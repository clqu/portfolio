import Head from 'next/head'
import Image from 'next/image'
import swr from '../../library/swr.js'


const Techs = () => {
    const { data: techs } = swr('/api/techs')
    const db = techs ? techs : null;

    return <>
        <p className="text-xl font-bold">Technologies
I use</p>
        <div className="grid grid-cols-1 mb-10 mt-4 md:grid-cols-5 gap-3">
        {techs ? (
            <>
            {db.map(tech =>
                <div key={tech.name} className="w-full p-2 bg-base-200 shadow-lg rounded-md transform transition-all duration-200 hover:-translate-y-1.5">
                    <div className="flex items-center">
                        <img className="w-6 h-6 mr-5" src={tech.src}width={24} height={24} />
                        {tech.name}
                    </div>
                </div>
            )}
            </>
        ) : (
            <i className="fas fa-spinner-third fa-spin fa-2x text-center" />

        )}
        </div>
    </>
}

export default Techs;