import swr from "../libraries/swr"

export default function Projects() {
    const { data: _projects } = swr('/api/projects');
    const projects = _projects ? _projects : null;
    const ProjectSkeleton = () => {
        return <>
            <div className="cursor-pointer w-full bg-zinc-100/90 p-4 rounded-lg hover:scale-[1.02] transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-200/50">
                <div className="bg-zinc-300 w-full h-32 rounded-lg animate-pulse" />
                <div className="bg-zinc-300 w-3/4 h-6 mt-4 rounded-lg animate-pulse" />
                <div className="bg-zinc-300 w-full mt-3 h-24 rounded-lg animate-pulse" />
            </div>
        </>
    };
    return <>
    <div className="px-6 lg:px-36 h-full py-36 pt-24">
        <div id="title-repos" className="relative">
        <p style={{ zIndex: 2 }} className="relative ml-2 text-3xl lg:text-6xl font-semibold">Projects</p>
          <p className="hidden lg:block absolute bottom-5 opacity-10 ml-2 text-8xl font-semibold">Experience</p>
          <div className="h-3 lg:h-6 w-2/4 -mt-2 lg:-mt-4 opacity-20 bg-cIndigo rounded-xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full gap-6 mt-6">

            {_projects ? (
                projects ? (
                    projects?.map((p, i) => (
                        <a href={p?.link} target="_blank" key={i} className="cursor-pointer w-full bg-zinc-100/90 p-4 rounded-lg hover:scale-[1.02] transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-200/50">
                            <img src={p.image} className="h-32 shadow-lg rounded-lg"/>
                            <div className="mt-4">
                                <p className="text-xl font-semibold">{p?.name}</p>
                                <p className="text-sm max-h-24 h-24 overflow-auto font-normal">{p?.description}</p>
                            </div>

                            <p className="text-xs italic mt-6"><i className="fal fa-globe mr-1" />{p?.link}</p>
                        </a>
                    ))
                ) : <></>
            ) : Array.from({ length: 8 }).map((_, index) => <ProjectSkeleton key={index} />)}

        </div>
      </div>
    </>
}