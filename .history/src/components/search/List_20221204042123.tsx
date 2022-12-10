import { channel } from 'diagnostics_channel'
import Link from 'next/link'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { FaSms } from 'react-icons/fa'
import {getDisplayedDate} from 'utils'
function List({data = []}: {data: any[]}) {
  return (
    <div className='search-result h-min-100  text-center'>
        <div className="grid grid-cols-8 bg-blue-50 font-semibold">
          <span className='py-3 px-5  text-left'>Date</span>
          <span className='py-3 px-5'>Categorie</span>
          <span className='py-3 px-5'>Contacts</span>
          <span className='py-3 px-5'>Medias</span>
          <span className='py-3 px-5'>Transmis</span>
          <span className='py-3 px-5'>Lus</span>
          <span className='py-3 px-5'>Statut</span>
          <span className='py-3 px-5'/>
        </div>
        {data.map((item, index)=> (
          <>
          <div className={`grid grid-cols-8 items-center ${index%2 === 1 ? 'bg-blue-50': ''}`} key={item.slug}>
              <span className='py-3 px-5 text-left'>
                {getDisplayedDate(item.messages[0].date)}
              </span>
              <span className='py-3 px-5 text-left'>
                {getDisplayedDate(item.messages[0].date)}
              </span>
              <span className='py-3 px-5 font-semibold'>
                {item.guests ? item.guests.length: 0}
              </span>
              <span className='py-3 px-5 flex items-center justify-center'>
                {item.channels.map((channelItem: any, channelIndex: number) => {
                  if(channelItem === "EMAIL")  return <CiMail className="ml-3 text-blue-600" size={22} key={`channelIndex-${channelIndex}`}/>;
                  if(channelItem === "WHATSAPP")  return <BsWhatsapp className="ml-3 text-green-600" size={22} key={`channelIndex-${channelIndex}`}/>;
                  if(channelItem === "SMS")  return <FaSms className="ml-3" size={22} key={`channelIndex-${channelIndex}`}/>;
                })}
              </span>
              <span className='py-3 px-5'>Transmis</span>
              <span className='py-3 px-5'>Lus</span>
              <span className='py-3 px-5'>{item.status}</span>
                <Link className="text-blue-900 font-semibold text-center" href={`/me/campagnes/${item.publicId}`}>Afficher</Link>
          </div>
          </>
        ))}
    </div>
  )
}

export default List