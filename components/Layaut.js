import Navbar from "./Navbar";
import Head from 'next/head';
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from 'nprogress'

const Layaut = ({ children, footer, dark, title }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      console.log(url)
      NProgress.start()
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routerChangeComplete', ()=> NProgress.done())
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }

  }, [])

  return(
    <div className={dark ? 'bg-dark' : ''}>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Navbar />
      <main className="py-4">
        {title && (
          <h1 className="text-center text-dark my-5">{title}</h1>
        )}
        {children}
      </main>

      {
        footer ? (
      <footer className='bg-dark text-light text-center'>
        <div className="container p-4">
          <h3>&copy; Alejandro Peñalba Portfolio</h3>
          <p className='mb-0'> 2018 - {new Date().getFullYear()}</p>
          <p>All Rights Reserved</p>
        </div>
      </footer>
        ) : ( null )
      }
    </div>
  );
}


export default Layaut;
