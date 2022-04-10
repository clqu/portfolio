import Tippy from "@tippyjs/react";
import swr from "../libraries/swr"

export default function Projects() {
    const { data: _repositories } = swr('/api/repos');
    const repositories = _repositories ? _repositories : null;
    const ProjectSkeleton = () => {
        return <>
            <div className="cursor-pointer w-full bg-zinc-100/90 p-4 rounded-lg hover:scale-[1.02] transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-200/50">
                <div className="bg-zinc-300 w-full h-32 rounded-lg animate-pulse" />
                <div className="bg-zinc-300 w-3/4 h-6 mt-4 rounded-lg animate-pulse" />
                <div className="bg-zinc-300 w-full mt-3 h-24 rounded-lg animate-pulse" />
                <div className="flex justify-between gap-x-4 w-full items-center">
                  <div className="bg-zinc-300 w-full mt-3 h-6 rounded-lg animate-pulse" />
                  <div className="bg-zinc-300 w-full mt-3 h-6 rounded-lg animate-pulse" />
                  <div className="bg-zinc-300 w-full mt-3 h-6 rounded-lg animate-pulse" />
                </div>
            </div>
        </>
    };
    return <>
    
    <div className="px-6 lg:px-36 h-full py-36 pt-24">
        <div id="title-repos" className="relative">
          <p style={{ zIndex: 2 }} className="relative ml-2 text-3xl lg:text-6xl font-semibold">Repositories</p>
          <p className="hidden lg:block absolute bottom-5 opacity-10 ml-2 text-8xl font-semibold">Repositories</p>
          <div className="h-3 lg:h-6 w-2/4 -mt-2 lg:-mt-4 opacity-20 bg-cIndigo rounded-xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full gap-6 mt-6">
        {_repositories ? (
          repositories && (
            repositories.map((p, i) => (
              <a href={p?.link} target="_blank" key={i} className="cursor-pointer w-full bg-zinc-100/90 p-4 rounded-lg hover:scale-[1.02] transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-200/50">
                  <img src={`https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/${p?.full_name}`} className="h-48 lg:h-32 w-full shadow-lg rounded-lg"/>
                  <div className="mt-4">
                      <p className="text-md font-semibold">{p?.name}</p>
                      <p className="text-sm max-h-24 h-24 overflow-auto font-normal">{p?.description || 'No description found.'}</p>
                  </div>

                  <div className="flex items-center w-full justify-between">
                    <Tippy content="S" animation="shift-away">
                      <div className="flex items-center justify-start">
                        <p className="text-sm">
                          <i className="fal fa-star mr-2" />
                        </p>
                        <p>{p?.stargazers_count}</p>
                      </div>
                    </Tippy>
                    <div className="text-sm text-black bg-zinc-200 px-2 py-1 rounded-md mr-1">
                      {p?.language || "Plain/Text"}
                    </div>
                    <Tippy content="Forks" animation="shift-away">
                      <div className="flex items-center justify-end">
                        <p>{p?.forks}</p>
                        <p className="text-sm">
                          <i className="fal fa-code-branch ml-2" />
                        </p>
                      </div>
                    </Tippy>
                  </div>
              </a>
            ))
          )
        ) : Array.from({ length: 8 }).map((_, index) => <ProjectSkeleton key={index} />)}

        </div>
      </div>
    </>
}