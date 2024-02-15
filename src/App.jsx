
import React from 'react'
import logo from './assets/logo.png'
import './App.css'
import Content1 from './components/Content1'
import CardsSection from './components/Cards'
import Onedrive from "./components/Onedrive"
import ForBussiness from "./components/Bussines"


function App() {

  return (
    <>

      <header className="header flex items-center justify-between py-3 xl:mx20">
      <div className="menu-btn flex">
          <div className="mx-4">
          <i className="fa-solid fa-bars"></i>
          </div>
          <div>
          <i className="fa-solid fa-magnifying-glass"></i>
          </div>
      </div>
      <div className="logo mr-1">
          <div>
              <img src={logo} alt="Microsoft Logo"/>
          </div>
      <ul>
          <li className="hover:border-b-2 border-black cursor-pointer">Microsoft 365</li>
          <li className="hover:border-b-2 border-black cursor-pointer">Office</li>
          <li className="hover:border-b-2 border-black cursor-pointer">Windows</li>
          <li className="hover:border-b-2 border-black cursor-pointer">Surface</li>
          <li className="hover:border-b-2 border-black cursor-pointer ">Xbox</li>
          <li className="hover:border-b-2 border-black cursor-pointer">Support</li>
      </ul>
      </div>
      <div className="cart flex">
          <div>
          <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="mx-4">
          <i className="fa-regular fa-user"></i>
          </div>
      </div>
      <div className="sign-in flex justify-between">
          <ul>
              <li className="block relative hover:border-b-2 border-black cursor-pointer">
                  <span className="block relative mr-8">All Microsoft</span>
                  <span className=" h-4 w-0 right-8 top-1 pl-0 absolute"><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
                  </li>
              <li className="block realtive ml-12 hover:border-b-2 border-black cursor-pointer"> 
                  <span className="block relative mr-8">Search</span>
                  <span className=" h-16 w-12 right-30 top-4 pl-12 left-30 absolute">  <i className="fa-solid fa-magnifying-glass"></i></span>  
              </li>
              <li className="block relative hover:border-b-2 border-black cursor-pointer">
                  <span className="">Cart</span>
                  <span className=" h-14 w-16 right-30  pr-4 absolute pe-3 pl-1">  <i className="fa-solid fa-cart-shopping"></i></span>
                  </li>
              <li className="block relative cursor-pointer pl-6 ">
                  <span>Sign In</span>
                  <span className=" h-16 w-10 right-30  pl-1 absolute pe-2 ">   <i className="fa-regular fa-user"></i></span>
              </li>
          </ul>
      </div>
  </header>
  <Content1 />
  <CardsSection />
  <Onedrive/>
  <ForBussiness/>
  

  <section className="links mt-5">
  <div className="bg-gray-200 mt-3 px-8 pb-4 md:flex items-center mt-5 justify-between xl:px-20">
  <div className="flex items-center text-gray-600">
 
  </div>
  </div>
</section>








      <div className="bg-gray-200 px-8 pb-4 md:flex items-center justify-between xl:px-20">
          <div className="flex items-center text-gray-600">
         
          <p className="text-sm">English (India)</p>
          </div>

          <div>
              <ul className="flex flex-wrap text-sm mt-4 text-gray-600">
                  <li className="mr-4">Contact Microsoft</li>
                  <li className="mr-4">Privacy</li>
                  <li className="mr-4">Terms of Use</li>
                  <li className="mr-4">Trademarks</li>
                  <li className="mr-4">About our ads</li>
                  <li>&copy; Microsoft 2022</li>
              </ul>
          </div>
      </div>
      </>


    
  )
}

export default App
