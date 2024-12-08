import Link from "next/link";
import { useState } from "react";
import Hamburgermenulist from "./Hamburgermenulist";
import Booktable from "./booktable";

export default function Hamburgermenu(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHoveredhotel, setIsHoveredHotel] = useState(false);
    const [isHoveredAbout, setIsHoveredAbout] = useState(false);
    const [isHoveredCareers, setIsHoveredCareers] = useState(false);
    const [isHoveredContact, setIsHoveredContact] = useState(false);
    const [isHoveredevent, setIsHoveredEvent] = useState(false);
    return(
        <>
        <div className=" absolute left-0 top-0 z-10  bg-creame h-max">
          <div className=" mt-24 w-full h-max  "> 
          <Link href="#hotels"  >
                    <button className="text-[5vw] text-gold uppercase w-full h-12  cursor-pointer hover:bg-gold hover:text-white   md:text-[4vw]" onMouseEnter={() => setIsHoveredHotel(true)}
                      onMouseLeave={() => setIsHoveredHotel(false)}><span >Hotels</span>
                    </button>
                  </Link>

          <button className="text-[5vw] text-gold uppercase w-full h-12  cursor-pointer hover:bg-gold hover:text-white  md:text-[4vw] md:w-full  " onClick={()=>setIsHoveredEvent(!isHoveredevent)}>
            <span>Events</span>
          {
            isHoveredevent && <Hamburgermenulist isHoveredevent={isHoveredevent}/>
          }
           
          </button>

                  <Link href="#"  >
                    <button className="text-[5vw] text-gold uppercase w-full h-12  cursor-pointer hover:bg-gold hover:text-white md:text-[4vw]" onMouseEnter={() => setIsHoveredAbout(true)}
                      onMouseLeave={() => setIsHoveredAbout(false)}><span >About Us</span>
                    </button>
                  </Link>
                  <Link href="#" className="" >
                    <button className="text-[5vw] text-gold uppercase w-full h-12  cursor-pointer hover:bg-gold hover:text-white  md:text-[4vw]" onMouseEnter={() => setIsHoveredContact(true)}
                      onMouseLeave={() => setIsHoveredContact(false)}><span >Contact Us</span>
                    </button>
                  </Link>
                  <Link href="#"  >
                    <button className="text-[5vw] text-gold uppercase w-full h-12  cursor-pointer hover:bg-gold hover:text-white  md:text-[4vw]" onMouseEnter={() => setIsHoveredCareers(true)}
                      onMouseLeave={() => setIsHoveredCareers(false)}><span >Careers</span>
                    </button>
                  </Link>

                   {/* button */}
          
            <button className="text-[5vw] text-gold uppercase w-full h-12  cursor-pointer hover:bg-gold hover:text-white  md:text-[4vw]" onClick={() => { setIsModalOpen(!isModalOpen), console.log("button is pressed") }} >Book Table</button>
            {
              isModalOpen && <Booktable isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            }
          </div>

          </div>
        </>
    )
}