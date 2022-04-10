import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router"
import { Fragment, useState, useEffect } from "react";

export default function Header() {
    const router = useRouter();
    let [ isOpen, setIsOpen ] = useState(false);
    useEffect(() => { setIsOpen(isOpen) }, [isOpen]);
    const Items = [
        { label: 'Home', redirect: '/', icons: { default: 'fal fa-home', active: 'fa fa-home' }},
        { label: 'Projects', redirect: '/projects', icons: { default: 'fal fa-compass', active: 'fa fa-compass' }},
        { label: 'Repositories', redirect: '/repositories', icons: { default: 'fal fa-compass', active: 'fa fa-compass' }},
        { label: 'Contact', redirect: '/contact', icons: { default: 'fal fa-phone-alt', active: 'fa fa-phone-alt' }},
    ]
    const [scrolled, setScrolled] = useState({currentScrollHeight: 0});
    useEffect(() => {
        window.onscroll =()=>{
            const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
            if (scrolled != newScrollHeight){
                setScrolled({currentScrollHeight: newScrollHeight})
            }
          }
    }, []);
    return <>
    
        <div style={{ zIndex: 99 }} id="header-clqu" className={`${scrolled?.currentScrollHeight > 70 && '!py-4 shadow-xl bg-white'} fixed px-6 lg:px-36 py-12 w-full transition-all duration-200`}>
            <div className="lg:grid lg:grid-cols-12 flex justify-between items-center w-full">
                <div className="col-span-3 w-full">
                    <Link href="/">
                        <p className="cursor-pointer font-semibold text-2xl">clqu<span className="text-cIndigo">.</span></p>
                    </Link>
                </div>
                <div className="hidden col-span-6 gap-x-4 w-full lg:flex justify-center">
                    {Items.map((i, _) => (
                        <Link href={i?.redirect} passHref key={_}>
                            <div className="relative flex flex-col h-full items-center">
                                <p className={`cursor-pointer transition-all duration-200 ${router.asPath === i.redirect ? 'text-cIndigo font-semibold' : 'text-black/50 hover:text-black/100 font-normal'}`}>{i.label}</p>
                                {router.asPath === i.redirect && (
                                    <div className="bg-cIndigo h-0.5 w-[110%] rounded-t-xl absolute -bottom-2" />
                                )}
                            </div>
                            
                        </Link>
                    ))}
                </div>
                <div className="flex items-center space-x-2 col-span-3 lg:w-full lg:flex justify-end">
                    <div onClick={() => {
                        setIsOpen(!isOpen)
                        if(isOpen) document.documentElement.classList.remove('overflow-hidden');
                        if(!isOpen) document.documentElement.classList.add('overflow-hidden');
                    }} className="lg:hidden text-center w-10 h-10 text-center flex items-center justify-center text-white cursor-pointer transition-all duration-200 bg-cIndigo hover:opacity-90 px-6 py-2 rounded-md">
                        <i className="fa fa-bars" />
                    </div>
                    <Link href='/talk' passHref>
                        <div className="text-center w-48 text-white cursor-pointer transition-all duration-200 bg-cIndigo hover:opacity-90 px-6 py-2 rounded-md">
                            Let's Talk
                        </div>
                    </Link>
                </div>
                
            </div>
        </div>

        <Transition
            as={Fragment}
            show={isOpen ? true : false}
            enter='transform transition-all duration-200'
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave='transform transition-all duration-200'
            leaveTo="translate-x-full opacity-0"
            leaveFrom="translate-x-0 opacity-100"
        >
            <div style={{ zIndex: 9999 }} className="p-6 bg-zinc-100 h-full fixed w-full top-0 left-0">
                <div className="flex justify-between w-full items-center">
                    <p className="cursor-pointer font-semibold text-2xl">clqu<span className="text-cIndigo">.</span></p>
                    <p onClick={() => {
                        setIsOpen(!isOpen)
                        document.documentElement.classList.remove('overflow-hidden');
                    }} className="cursor-pointer hover:bg-zinc-300 transition-all duration-200 w-12 h-12 flex justify-center items-center bg-zinc-200 rounded-xl">
                        <i className="fal fa-times text-xl" />
                    </p>
                </div>
                <div className="space-y-6 flex flex-col mt-6 w-full">
                    {Items.map((i, _) => (
                        <Link href={i?.redirect} passHref key={_}>
                            <div className="relative flex flex-col h-full items-center">
                                <p className={`cursor-pointer hover:bg-zinc-300  w-full h-full px-4 py-2 rounded-lg transition-all duration-200 ${router.asPath === i.redirect ? 'text-cIndigo font-semibold' : 'text-black/50 hover:text-black/100 font-normal'}`}>{i.label}</p>
                                {router.asPath === i.redirect && (
                                    <div className="bg-cIndigo h-full w-1 rounded-xl absolute left-0" />
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
                
            </div>
        </Transition>
    </>
}