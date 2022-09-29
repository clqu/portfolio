import axios from "axios";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Page = ({ id, data }) => {

    function getDate(date) {
        let d = new Date(date);
        let month = d.getMonth() + 1;
        let day = d.getDate();
        let year = d.getFullYear();

        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;;
    }
    return (
        <>
            <div className="max-w-7xl mx-auto py-12 w-full px-6 lg:px-0">
                <div className="relative h-96 w-full">
                    <img src={data.image} alt={data.title} className="rounded-lg absolute h-full w-full" />
                    <div className="absolute bottom-0 left-0 w-full h-full dark:bg-black/50 shadow-xl" />
                </div>

                <div className="mt-8">
                    <p className="text-4xl font-bold mt-8">{data.title}</p>
                    <div className="flex items-center gap-4 mt-2">
                        <div>
                            <i className="fas fa-clock text-zinc-400" />
                            <span className="text-zinc-400 ml-2">{data.readTime.minutes} minutes of reading</span>
                        </div>
                        <div>
                            <i className="fas fa-calendar-alt text-zinc-400" />
                            <span className="text-zinc-400 ml-2">{getDate(data.createdAt)}</span>
                        </div>
                    </div>
                    <article className="mt-12 prose prose-sm lg:prose-lg dark:prose-invert prose-img:rounded-lg prose-a:text-blue-500 prose-a:no-underline">
                        <ReactMarkdown children={Buffer?.from(data?.content || Buffer.from('Something went wrong...').toString('base64'), 'base64').toString()} remarkPlugins={[remarkGfm]} />
                    </article>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async (context) => {
    const request = await axios.get('https://clqu.me/api/post?id=' + context?.query.id).then(res => res.data).catch(err => err.response);

    if (!request) return {
        notFound: true
    };
    if (request.success) {
        return {
            props: {
                data: request.data
            }
        }
    } else {
        return {
            notFound: true
        }
    }
};

export default Page;
