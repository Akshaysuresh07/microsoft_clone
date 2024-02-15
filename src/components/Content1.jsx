import { FaChevronRight } from 'react-icons/fa'
import React from 'react'
import showcase from "../assets/microsoft365.jpg"

const Content1 = () => {
  return (
    <section className="hero xl:mx-20">
    <div className="mt-5">
    <img className="hero-img object-cover w-full h-auto sm:h-auto md:h-auto lg:h-auto xl:h-auto" src={showcase} alt="hero" />
  </div>
  
      <div className="overlay bg-gray-200 text-center p-10 sm:bg-transparent sm:justify-center sm:text-left">
        <h1 className="font-bold text-2xl mb-2">Microsoft 365 </h1>
        <p className="text">
          Premium Office apps, extra cloud storage, advanced security, and more - all in one convenient subscription
        </p>
        <button className="bg-black  text-white py-2 px-4 pr-10 mt-5 hover:underline sm:flex items-center justify-center">
          <span className="mr-2">Choose your Microsoft365</span>
          <span className="h-4 w-4"><FaChevronRight /></span>
        </button>

      </div>
    </section>
  )
}
export default Content1