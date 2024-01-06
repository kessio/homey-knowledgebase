/* eslint-disable no-unused-vars */
import react from 'react'
import SearchBar from './SearchBar'

function Home() {
  return (
    <section
    className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] w-full bg-cover bg-center bg-no-repeat"
  >
     <div className="absolute inset-0 bg-black/75 sm:bg-opacity-0 sm:from-opacity-95 sm:to-opacity-25"></div>
    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8"
    >
      <div className="text-center">
        <h1 className="text-2xl text-white font-extrabold sm:text-5xl">
          Homey
  
          <strong className="font-extrabold text-rose-700"> Knowledge Base </strong>
        </h1>
        <SearchBar />
       
      </div>
    </div>
  </section>
  )
}

export default Home