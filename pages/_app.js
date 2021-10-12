import '../styles/globals.css'
import Navbar from '../components/Static/Navbar.js'
import Footer from '../components/Static/Footer.js'

function MyApp({ Component, pageProps }) {
    return <>
        <head>
            <title>clqu</title>
            <link href="https://pro.fontawesome.com/releases/v5.13.1/css/all.css" rel="stylesheet" />
        </head>
        <div className="bg-base-300">
            <div className="max-w-screen-lg p-5 w-full md:py-10 md:w-10/12 lg:py-20 lg:w-8/12 mx-auto transition-all duration-300">
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </div>
    </>
}

export default MyApp
