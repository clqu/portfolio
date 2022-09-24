import { usePage } from 'context/page'
import useSWR from 'hooks/useSWR'
import Head from 'next/head'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment, useState } from 'react'
import clquConfig from '../../clqu.config'
import Button from 'components/Global/Button'
import Carousel from "react-multi-carousel";
import Input from 'components/Global/Input'
import axios from 'axios'

export default function About() {
    const { page } = usePage();
    let [error, setError] = useState(false);
    let [success, setSuccess] = useState(false);
    let [loading, setLoading] = useState(false);

    const Submit = async (e) => {
        e.preventDefault();
        const form = e.target;

        setLoading(true);

        setTimeout(() => {
            axios.post('/api/contact', {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            }).then(res => {
                setLoading(false);
                let data = res.data;
                if (data.success) {
                    setSuccess(true);
                    let subject = data.data.subject;
                    let body = data.data.body;

                    window.open(`mailto:${clquConfig.email}?subject=${subject}&body=${body}`, '_blank', 'noopener,noreferrer')
                } else {
                    setSuccess(false);
                    setError(data.message);
                }
            }).catch(err => {
                setLoading(false);
                let data = err.response.data;
                setSuccess(false);
                setError(data.message);
            })
        }, 1000);
    }

    return <>
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between w-full h-full py-24 gap-24">
                <div className="w-full">
                    <form onSubmit={Submit}>
                        <h1 className="text-4xl font-bold">Contact</h1>
                        <p className="text-sm mt-1 text-gray-500">
                            <i className="fa fa-envelope" /> {clquConfig.email}
                        </p>
                        <div className="flex flex-col gap-4 mt-4">
                            <Input name="name" placeholder="Username" startsWith={<i className="fa fa-user" />} />
                            <Input name="email" placeholder="Email" startsWith={<i className="fa fa-envelope" />} />
                            <Input name="message" wrapper="textarea" placeholder="Message" startsWith={<i className="fa fa-comment" />} />
                        </div>

                        <div className="flex items-center gap-4 justify-between mt-4">
                            {!success && !error && <div />}
                            {!success && error && <p className="bg-red-500/5 px-4 py-2 rounded-lg shadow-xl text-red-500 italic flex items-center gap-2">
                                <i className="fa fa-exclamation-circle" />
                                {error}
                            </p>}
                            {success && <p className="bg-green-500/5 px-4 py-2 rounded-lg shadow-xl text-green-500 italic flex items-center gap-2">
                                <i className="fa fa-check-circle" />
                                Message sent successfully
                                </p>}

                            <Button disabled={loading} className={`flex items-center gap-4 ${loading && 'opacity-50 cursor-not-allowed'}`}>
                                {loading && <i className="fal fa-spinner-third fa-spin" />}
                                {!loading && (
                                    <>
                                        <i className="fa fa-paper-plane" />
                                        Send
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>
}
