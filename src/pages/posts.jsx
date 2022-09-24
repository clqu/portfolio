import { usePage } from 'context/page'
import useSWR from 'hooks/useSWR'
import Head from 'next/head'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import clquConfig from '../../clqu.config'
import Button from 'components/Global/Button'
import Carousel from "react-multi-carousel";
import Link from 'next/link'

export default function Posts() {
    const { page } = usePage();

    const { data: $posts } = useSWR('/api/posts');
    const posts = $posts?.data;

    return <>
        <div className="max-w-7xl mx-auto">
            <div className="py-24">
                <h1 className="font-display text-5xl font-medium sm:text-7xl text-black dark:text-white">My <span className="relative whitespace-nowrap text-primary"><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20 rotate-180" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" /></svg><span className="relative">Posts</span></span></h1>
                <div className="grid grid-cols-1 gap-8 mt-16">
                    {posts?.map((post, index) => (
                        <Link href={`/post/${post.id}`}>
                            <a key={index} className="cursor-pointer w-full bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10">
                                <div>
                                    <p className="text-xl font-semibold">{post.title}</p>
                                    <p className="text-sm font-normal text-gray-500">{post.description}</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <p className="text-xs space-x-2 mt-6">
                                        <i className="fal fa-calendar mr-1" />{new Date(post.createdAt).toLocaleDateString()}
                                    </p>
                                    <p className="text-xs space-x-2 mt-6">
                                        <i className="fal fa-eye mr-1" />{post.viewers}
                                    </p>
                                    <p className="text-xs space-x-2 mt-6">
                                        <i className="fal fa-clock mr-1" />{post.readTime.minutes} min read
                                    </p>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    </>
}
