import React, { useState } from 'react'

import { FaChevronRight } from 'react-icons/fa'
import logo2 from '../assets/Surface-Laptop-Studio-01-CP.webp'
 import logo1 from '../assets/Card-Surface-Laptop-5.jpg'
 import logo3 from '../assets/Xbox-Series-X.webp'
 import logo4 from '../assets/Content-Card-Microsoft-365-.jpg'

const CardsSection = () => {


  return (
    <section className="section-2 md:grid grid-cols-2 xl:grid-cols-4 xl:mx-20">

      <article className="p-8">
            <div>
              <img src={logo1} alt="card" />
              <p className="inline-block px-3 mt-4 text-black mb-3">
                </p>
              <h3 className="font-semibold text-3xl mt-2 mb-1">Suface Laptop 4</h3>
              <p>Do it all with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance.</p>
              <button className="block relative cursor-pointer text-blue-600 font-semibold">
                <span>Shop now</span>
                <span className=" h-4 w-0 right-0 top-1 pl-0 absolute"><FaChevronRight/></span>
              </button>
            </div>
          </article>
          <article className="p-8">
            <div>
                <img src={logo2} alt="card" />
                <p className="inline-block px-3 mt-4 text-black bg-yellow-400">
                    New
                </p>
                <h3 className="font-semibold text-3xl mt-2 mb-1">Surface Laptop Studio</h3>
                <p>Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.</p>
                <button className="block relative cursor-pointer text-blue-600 font-semibold">
                <span>Learn More</span>
                <span className=" h-4 w-0 right-0 top-1 pl-0 absolute"><FaChevronRight/></span>
                </button>
            </div>
          </article>
          <article className="p-8">
                <div>
                <img src={logo3} alt="card" />
                <p className="inline-block px-3 mt-4 text-black mb-3">
                </p>
                <h3 className="font-semibold text-3xl mt-2 mb-1">Xbox Game Pass Ultimate</h3>
                <p>The fastest, most powerful Xbox ever.</p>
                <button className="block relative cursor-pointer text-blue-600 font-semibold">
                    <span>Join now</span>
                    <span className=" h-4 w-0 right-0 top-1 pl-0 absolute"><FaChevronRight/></span>
                </button>
                </div>
          </article>
          <article className="p-8">
                <div>
                <img src={logo4} alt="card" />
                <p className="inline-block px-3 mt-4 text-black mb-3">
                </p>
                <h3 className="font-semibold text-3xl mt-2 mb-1">Maximise the everyday with Microsoft 365</h3>
                <p>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
                <button className="block relative cursor-pointer text-blue-600 font-semibold">
                    <span>Download now</span>
                    <span className=" h-4 w-0 right-0 top-1 pl-0 absolute"><FaChevronRight/></span>
                </button>
                </div>
          </article>
    </section>
  )
}

export default CardsSection