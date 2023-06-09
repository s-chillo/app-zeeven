import React from 'react'
import Footer from '../components/Footer';
import Header from './components/Header';

function ProtectedLayout({children}: {children: any}) {
  return (
    <section className={`bg-gradient-to-b from-blue-100 to-pink-50 min-h-screen font-light h-min-screen flex flex-col justify-between`}>
      <Header />
      <div className="container mx-auto">
        <main className='lg:grid lg:grid-cols-12 lg:gap-x-5 my-10'>
          {/*<Aside />*/}
          <section className='space-y-6 sm:px-6 lg:px-0 lg:col-span-12'>
            {children}
          </section>
        </main>
      </div>
      <Footer />
    </section>
  )
}

export default ProtectedLayout