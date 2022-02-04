import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
        <title>clqu.live</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet" />
        <link 
            href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=optional" 
            rel="stylesheet" 
        />
    </Head>
    <main className="border-b-[7px] border-t-[7px] h-full border-neutral-800 w-full">
      <div className="max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300">
       <Component {...pageProps} />
      </div>
      <div className="bg-neutral-800/30">
        <div className="max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300">
          <div className="md:flex w-full items-center justify-between">
            <div>
              <p>Copyright &copy; 2022 - Developed with ❤️ by clqu.</p>
              <a href="https://github.com/clqu/clqu.live" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-all duration-200">This website is open source on GitHub.</a>
            </div>
            <div className="mt-2 md:mt-0 flex items-center">
              <a href="https://voiddevs.org/discord" target="_blank" rel="noreferrer" className="w-full md:w-auto bg-neutral-700/30 hover:bg-neutral-700/50 px-4 py-2 rounded-md transition-all duration-200">
                <i className="fab fa-discord mr-2" />Contact with Discord
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>
  </>);
}

export default MyApp
