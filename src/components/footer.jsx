import { IoLogoInstagram } from "react-icons/io5";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaWhatsapp ,FaLinkedin} from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <>
 <div className=" bg-green-700 flex  flex-col  w-full  sm:h-96 lg:h-max">
      <div className=" w-full py-5 ">
       <div className=" h-80 flex  flex-col md:flex md:justify-center md:items-center md:flex-row lg:h-max lg:mx-10  lg:flex lg:justify-between lg:items-center">
        <div className="  flex  my-3  md:w-96   lg:h-48 lg:w-full" >
         <div className=" w-full flex justify-center items-center  lg:flex lg:justify-center lg:items-start" >
         <ul className="footer-ul  w-max flex justify-center items-center flex-col ">
              <li className=""><span className="neucha-regular text-[5vw] text-white cursor-pointer uppercase hover:text-gold font-bold md:text-[3vw] lg:text-lg " >party</span></li>
              <li className=""><span className="neucha-regular text-[5vw] text-white cursor-pointer uppercase hover:text-gold font-bold md:text-[3vw] lg:text-lg " >Hotels</span></li>
              <li className=""><span className="neucha-regular text-[5vw] text-white cursor-pointer uppercase hover:text-gold font-bold md:text-[3vw] lg:text-lg " >Business meeting</span></li>
              <li className=""><span className="neucha-regular text-[5vw] text-white cursor-pointer uppercase hover:text-gold font-bold md:text-[3vw] lg:text-lg " >celebration</span></li>
              <li className=""><span className="neucha-regular text-[5vw] text-white cursor-pointer uppercase hover:text-gold font-bold md:text-[3vw] lg:text-lg " >Dinner</span></li>
            </ul>
         </div>
        

         <div className=" w-full flex justify-center items-center   lg:flex lg:justify-center lg:items-start ">
         <ul className="footer-ul  w-max flex justify-start items-center flex-col  ">
              <li className="text-white  " ><span className="neucha-regular text-[5vw] text-white cursor-pointer uppercase hover:text-gold font-bold md:text-[3vw] lg:text-lg " >Contact Us</span></li>
              <li className="text-white  " ><span className="neucha-regular text-[5vw] text-white cursor-pointer uppercase hover:text-gold font-bold md:text-[3vw] lg:text-lg " >About Us</span></li>
              <li className="text-white  " ><span className="neucha-regular text-[5vw] text-white cursor-pointer uppercase hover:text-gold font-bold md:text-[3vw] lg:text-lg " >Privacy Policy</span></li>
              <li className="text-white  " ><span className="neucha-regular text-[5vw] text-white cursor-pointer uppercase hover:text-gold font-bold md:text-[3vw] lg:text-lg " >Careers</span></li>
              <li className="text-white  " ><span className="neucha-regular text-[5vw] text-white cursor-pointer uppercase hover:text-gold font-bold md:text-[3vw] lg:text-lg " >Sitemap</span></li>
            </ul>
         </div>
        </div>
        <div className=" ">
         <div className=" w-full flex justify-center items-center flex-col   md:w-max  lg:w-[480px] sm:h-max ">
         <div className="flex flex-col  justify-center items-center ">
              <h2 className=" uppercase text-lg  text-creame ">Site by</h2>
              <h2 className="text-white text-md neucha-regular text-lg sm:text- ">Omkar Dhawan</h2>
              <h3 className="text-white text-md neucha-regular text-lg sm:text- ">dhawanomkar355@gmail.com</h3>
              <h3 className="text-white text-md neucha-regular text-lg sm:text- ">+918956503272</h3>
              <h4 className="text-white text-md neucha-regular text-lg sm:text- ">© 2024  All Rights Reserved.</h4>
            </div>
            <div className="flex justify-center items-center  h-10 " >
              <Link href="https://www.instagram.com/dhawan_omkar/?hl=en" className="mx-1 ">
              <span className="mx-1 text-white my-2 hover:text-gold cursor-pointer" ><FaInstagram size={28} /></span>
              </Link>
              <Link href="https://www.facebook.com/om.dhawan.545" className="mx-1">
              <span className="mx-1 text-white my-2 hover:text-gold cursor-pointer" ><FaFacebook size={28} /></span>
              </Link>
              <Link href="https://in.linkedin.com/in/omkar-dhawan" className="mx-1">
              <span className="mx-1 text-white my-2 hover:text-gold cursor-pointer" ><FaLinkedin size={28} /></span>
              </Link>

            </div>
         </div>
         </div>
       </div>
      </div>

 </div>
 

        {/* <div className=" w-full  p-5 flex footer-main">
          <div className=" w-full justify-center items-center footer-div1 ">
            <ul className="footer-ul">
              <li className="my-1 ml-48 "><span className="neucha-regular text-lg text-white cursor-pointer uppercase hover:text-gold font-bold" >Hotels</span></li>
              <li className="my-1 ml-48 "><span className="neucha-regular text-lg text-white cursor-pointer uppercase hover:text-gold font-bold" >Dinner</span></li>
              <li className="my-1 ml-48 "><span className="neucha-regular text-lg text-white cursor-pointer uppercase hover:text-gold font-bold" >celebration</span></li>
              <li className="my-1 ml-48 "><span className="neucha-regular text-lg text-white cursor-pointer uppercase hover:text-gold font-bold" >Business meeting</span></li>
              <li className="my-1 ml-48 "><span className="neucha-regular text-lg text-white cursor-pointer uppercase hover:text-gold font-bold" >party</span></li>
            </ul>
          </div>
          <div className=" w-full footer-div2">
            <ul className="">
              <li className="text-white my-1 ml-48 " ><span className="neucha-regular text-lg text-white cursor-pointer uppercase hover:text-gold font-bold" >Contact Us</span></li>
              <li className="text-white my-1 ml-48 " ><span className="neucha-regular text-lg text-white cursor-pointer uppercase hover:text-gold font-bold" >About Us</span></li>
              <li className="text-white my-1 ml-48 " ><span className="neucha-regular text-lg text-white cursor-pointer uppercase hover:text-gold font-bold" >Privacy Policy</span></li>
              <li className="text-white my-1 ml-48 " ><span className="neucha-regular text-lg text-white cursor-pointer uppercase hover:text-gold font-bold" >Careers</span></li>
            </ul>
          </div>
          <div className=" w-full flex  flex-col footer-div3">

            <div className="flex flex-col  justify-center items-center footer-div4">
              <h1 className=" uppercase text-lg  text-creame ">Site by</h1>
              <h2 className="text-white text-md neucha-regular text-lg">Omkar Dhawan</h2>
              <h3 className="text-white text-md neucha-regular text-lg">dhawanomkar355@gmail.com</h3>
              <h3 className="text-white text-md neucha-regular text-lg">+918956503272</h3>
              <h4 className="text-white text-md neucha-regular text-lg">© 2024  All Rights Reserved.</h4>
            </div>
            <div className="flex justify-center items-center" >
              <span className="mx-1 text-white my-2 hover:text-gold cursor-pointer" ><FaInstagram size={28} /></span>
              <span className="mx-1 text-white my-2 hover:text-gold cursor-pointer" ><FaFacebook size={28} /></span>
              <span className="mx-1 text-white my-2 hover:text-gold cursor-pointer" ><FaWhatsapp size={28} /></span>

            </div>
          </div>
        </div> */}

    </>
  )
}