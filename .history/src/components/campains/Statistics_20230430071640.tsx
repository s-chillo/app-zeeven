import React from 'react'
import Emoji from '@/components/shared/Emoji';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { search } from '@/services/crud';
import Message from '@/components/Message';
function Statistics() {
  const {query: {slug}} = useRouter();
	const {isSuccess, isLoading, isError, data: {data} = {}} = useQuery<any>({
		queryKey: ["user-campains", slug],
		queryFn: () => search(`/event/${(slug as string)?.substring((slug as string)?.lastIndexOf('-') + 1)}`),
		refetchOnWindowFocus: false,
	});
  return (
    <>
      	{isLoading ? (
					<Message
						type="loading"
						firstMessage='Un instant'
						secondMessage='Nous chargeons vos informations'
					/>)
				: null
			}

			{isError ? (
					<Message
						type="error"
						firstMessage='Une erreur est survenue, nous allons la résoudre sous peu'
						secondMessage='Veuillez prendre contact avec nous'
						actionLabel="Retourner à l'accueil"
					/>)
				: null
			}
      {isSuccess && data ? (
       <article
    className='shadow sm:rounded-md sm:overflow-hidden min-h-fit bg-white py-6 px-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 mb-4'>
    <div className='grid grid-rows-2 text-center items-center justify-center'>
      <Emoji symbol='&#128521;'/>
      <h3 className='text-orange-600 text-xl py-2 flex flex-col font-semibold'>
        <span>{data?.guests?.length}</span>
        <span>Transmis</span>
      </h3>
    </div>
    <div className='grid grid-rows-2 text-center items-center justify-center'>
      <Emoji symbol='&#128516;'/>
      <h3 className='text-blue-500 text-xl py-2 flex flex-col font-semibold'>
        <span>{data?.guests?.length}</span>
        <span>Ouverts</span>
      </h3>
    </div>
    <div className='grid grid-rows-2 text-center items-center justify-center'>
      <Emoji symbol='&#128522;'/>
      <h3 className='text-purple-500 text-xl py-2 flex flex-col font-semibold'>
        <span>{data?.guests?.length}</span>
        <span>Clicks</span>
      </h3>
    </div>
    <div className='grid grid-rows-2 text-center items-center justify-center'>
      <Emoji symbol='&#129303;'/>
      <h3 className='text-green-600 text-xl py-2 flex flex-col font-semibold'>
        <span>{data?.guests?.length}</span>
        <span>Réponses</span>
      </h3>
    </div>
  </article>
      ): null }
    </>
   
  )
}

export default Statistics