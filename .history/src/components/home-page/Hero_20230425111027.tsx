import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import NavBar from '@/containers/components/NavBar';
import Statistics from './Statistics';

function Hero() {
	const [isLoading, setLoading] = useState(true);
	const cn = (...classes: string[]) => {
		return classes.filter(Boolean).join(' ')
	}
	const loaderProp = ({src}: { src: string }) => {
		return src;
	}
	return (
    <>	
    <Head>
      <title>Informez nos contacts de vos évènements</title>
      <meta name="description" content="Informez nos contacts de vos évènements"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <section >
			<div className="">
				<NavBar/>
			</div>
      <div className="container rounded-lg my-4 grid grid-cols-2 gap-4" style={{background: "#eef2f5"}}>
        <article className="flex flex-col items-start px-10 py-10">
          <h1 className='text-blue-900 text-3xl md:text-5xl flex flex-col font-extrabold'>
            <span>Informez vos contacts.</span>
            <span>Ils apprécient votre affection.</span>
          </h1>
          <h4 className='text-blue-900 flex flex-col font-extralight py-2 md:my-3'>
            <span className='mb-1'>Ne perdez plus le temps à écrire à chacun de vos contacts</span>
            <span className='mb-1'>ZEEVEN permet de personnaliser les interactions,les communications que vous engagiez vos contacts.</span>
            <span className='mb-1'>Recevez les statistiques et suivez vos messages</span>
          </h4>
          <Link href="/create-campain"
              className={`mx-auto md:mx-0 bg-yellow-400 text-blue-900 border-yellow-500 text-lg py-4 rounded-lg px-5`}>
            Envoyez votre premier applicationMessage
          </Link>
          <Link href="/contactez-nous"
              className={`mx-auto mt-3 md:mx-0 underline text-blue-900 border-yellow-500 text-lg rounded-lg`}>
            Contacter le service commercial
          </Link>
        </article>
        <article className='relative'>
            <Image
								priority={true}
								fill={true}
								src={`/images/zeeven.png`}
								alt="Ecrivez un applicationMessage et transmettez le à tout le monde, sur plusieurs canaux"
								loader={loaderProp}
								unoptimized={true}
								className={cn(
									'rounded-md duration-700 ease-in-out group-hover:opacity-75 object-contain',
									isLoading
										? 'scale-110 blur-2xl grayscale'
										: 'scale-100 blur-0 grayscale-0'
								)}
								onLoadingComplete={() => setLoading(false)}
							/>
        </article>
        <Statistics/>
      </div>
    </section>
    </>
	)
}

export default Hero;