import Metadata from '@/components/Metadata';
import OpenedLayout from '@/containers/opened';
import { ApplicationContext } from '@/context/ApplicationContext';
import { fetchData } from '@/services';
import { MENUFULL, URL_DATA } from '@/utils';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

function Espaces({index}: any) {
  const context = useContext(ApplicationContext);
  const { updateData } = context;
  const router = useRouter();
  const { asPath } = router;
  const [data, setData] = useState<any>();
  useQuery<any>({
    queryKey: ['menu', asPath],
    queryFn: () =>
      fetchData({
        path: `menu/${asPath.substring(asPath.lastIndexOf('-') + 1)}`,
        fields: MENUFULL,
      }),
    onSuccess: (data) => {
      setData(data.data.data);
      updateData({pageHeader: {images: data.data.data.images, titre:  data.data.data.sous_libelle}})
    },
  });

  return (
    <>
      <Metadata entry={data?.metadonnees[0]}/>
      <OpenedLayout>
        { data ? (
          <section className='container grid md:grid-cols-3 gap-6 mt-10 md:mt-0'>
            {data.espaces
            .filter((item: any) => item.espace_id.types && item.espace_id.types.length)
            .sort((a: any, b: any) => (a.ordre > b.ordre ? 1 : -1))
            .map((gite: any, index: number) => {
              return (
               <p>d</p>
              );
            })}
          </section>
        ) : (
          <div className="flex justify-center items-center h-screen dark:bg-app-black bg-app-white">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-app-yellow"></div>
          </div>
        )}
      </OpenedLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  const {page} = params;
  
  return {
    props: {
      ...params,
      index: page.split('-')[0]
    }
  };
}

export default Espaces;
