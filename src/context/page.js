import { useRouter } from 'next/router';
import { useContext, createContext, useState, useEffect } from 'react';

const PageContext = createContext();

export const usePage = () => useContext(PageContext);

export const PageProvider = ({ children, value }) => {

    const router = useRouter();

    function getPage() {
        if (router.pathname === '/_error') {
            return '/error';
        }

        return router.pathname;
    }

    let [page, setPage] = useState('/');

    useEffect(() => {
        setPage(getPage());
    }, [router]);


    return (
        <PageContext.Provider value={{
            page,
        }}>
            {children}
        </PageContext.Provider>
    )
};

export default PageContext;