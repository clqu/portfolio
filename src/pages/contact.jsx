import { useState, useEffect } from "react"
import { base, contactHook } from "../../config";

export default function Projects() {
    const inputs = [
      {
        id: 'username',
        icons: {
          default: 'fal fa-user',
          active: 'fa fa-user'
        },
        placeholder: 'clqu',
        type: 'input'
      },
      {
        id: 'email',
        icons: {
          default: 'fal fa-envelope',
          active: 'fa fa-envelope'
        },
        placeholder: 'no-reply@example.com',
        type: 'input'
      },
      {
        id: 'content',
        icons: {
          default: 'fal fa-text',
          active: 'fa fa-text'
        },
        placeholder: 'Helloooo',
        type: 'textarea'
      },
    ]
    let [activeInput, setActiveInput] = useState();
    let [submited, setSubmited] = useState(false);
    useEffect(() => { setActiveInput(activeInput) }, [activeInput]);


    const getInputClasses = (input) => {
      let activeClasses = 'w-[100%] bg-zinc-100 border rounded-lg outline-none border-cIndigo/100 text-cIndigo transition-border duration-200'
      let defaultClasses = 'w-[100%] bg-zinc-100 border rounded-lg outline-none border-cIndigo/20 transition-border duration-200'
      if(input?.id === activeInput?.id) return activeClasses;
      return defaultClasses;
    }
    const getInputIcon = (input) => {
      if(input?.id === activeInput?.id) return input?.icons?.active;
      return input?.icons?.default;
    }

    const submitContact = e => {
      e.preventDefault();
      setSubmited(true);
      setTimeout(async() => {
        let email = e?.target?.email?.value;
        let username = e?.target?.username?.value;
        let content = e?.target?.content?.value;
        await fetch(base+'/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            email: email,
            content: content
          })
        }).then(r => {
          if(r) {
            setSubmited(false);
          } else {
            setSubmited(false);
          }
        })
      }, 2500);
    }
    return <>
    
    <div className="px-6 lg:px-36 h-full py-36 pt-24">
        <div id="title-repos" className="relative">
          <p style={{ zIndex: 2 }} className="relative ml-2 text-3xl lg:text-6xl font-semibold">Contact</p>
          <p className="absolute bottom-5 opacity-10 ml-2 text-8xl font-semibold">Say Hello</p>
          <div className="h-6 w-1/2 -mt-4 opacity-20 bg-cIndigo rounded-xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200 h-full w-full gap-6 mt-6">
          <div className="w-full">
            <form onSubmit={submitContact} className="w-full space-y-4" autoComplete="off">
              {inputs.map((input, index) => (
                <>
                  <div className={`flex ${input.type === 'input' && 'items-center'} ${getInputClasses(input)}`}>
                      <i className={getInputIcon(input) + ' py-5 px-6'} />
                      {input.type === 'input' ? (
                          <input autoComplete="off" id={input?.id} name={input?.id} placeholder={input?.placeholder} onFocus={() => setActiveInput(input)} onBlur={() => setActiveInput()} className={'bg-transparent px-2 py-3 outline-none h-full w-full'} />
                        ) : (
                            <textarea autoComplete="off" id={input?.id} name={input?.id} placeholder={input?.placeholder} onFocus={() => setActiveInput(input)} onBlur={() => setActiveInput()} rows={5} maxLength={2000} className={'bg-transparent px-2 py-4 outline-none h-full w-full'} />
                      )}
                  </div>
                </>
              ))}
              <button type={'submit'} disabled={submited} className="text-center w-48 text-white cursor-pointer transition-all duration-200 bg-cIndigo hover:opacity-90 px-6 py-2 rounded-md">
                  {submited ? <i className="fal fa-spinner-third fa-spin" /> : 'Submit'}
              </button>
            </form>
          </div>
          <div>
            <div className="space-y-4 p-4">
                <p className="text-xl font-semibold">Contact with...</p>
                <a href={'mailto:me@clqu.live'} className="flex justify-between cursor-pointer hover:bg-zinc-300/50 transition-all duration-200 items-center bg-zinc-100 px-4 py-2 rounded-xl">
                  <p className="text-xl">Email</p>
                  <i className="fa fa-envelope text-2xl" />
                </a>
                <a href={'https://discord.gg/PFnafbxd5u'} target="_blank" className="flex justify-between cursor-pointer hover:bg-zinc-300/50 transition-all duration-200 items-center bg-zinc-100 px-4 py-2 rounded-xl">
                  <p className="text-xl">Discord</p>
                  <i className="fab fa-discord text-2xl" />
                </a>
                <a href={'https://twitter.com/clquu_'} target="_blank" className="flex justify-between cursor-pointer hover:bg-zinc-300/50 transition-all duration-200 items-center bg-zinc-100 px-4 py-2 rounded-xl">
                  <p className="text-xl">Twitter</p>
                  <i className="fab fa-twitter text-2xl" />
                </a>
                <a href={'https://instagram.com/this.clqu'} target="_blank" className="flex justify-between cursor-pointer hover:bg-zinc-300/50 transition-all duration-200 items-center bg-zinc-100 px-4 py-2 rounded-xl">
                  <p className="text-xl">Instagram</p>
                  <i className="fab fa-instagram text-2xl" />
                </a>
            </div>
          </div>

        </div>
      </div>
    </>
}