import { FaGlobe } from 'react-icons/fa'
import React from "react";
// import data from '../Data/footer';

const Footer = () =>{
    // const links = data;
    return(
        <>
            
        
        <section className="links mt-5">
        <div className="bg-gray-200 mt-3 px-8 pb-4 md:flex items-center mt-5 justify-between xl:px-20">
        <div className="flex items-center text-gray-600">
       
        </div>
        </div>
      </section>
      







            <div className="bg-gray-200 px-8 pb-4 md:flex items-center justify-between xl:px-20">
                <div className="flex items-center text-gray-600">
                <FaGlobe className="mr-3" />
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

export default Footer;