"use client"
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCalendar } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Navstyle from "../../public/style/navbar.module.css"
export default function Booktable({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
          document.documentElement.style.overflow = 'hidden'; // Disable scroll
        } else {
          document.documentElement.style.overflow = 'scroll'; // Enable scroll
        }
      
        return () => {
          document.documentElement.style.overflow = 'scroll'; // Ensure scroll is enabled on unmount
        };
      }, [isOpen]);
      
    return (
        <>
               <div className=" w-full absolute top-0 left-0 bg-peachPuff z-30 lg:h-full">
                <div className="   flex flex-col justify-center items-center w-full mt-28  lg:mt-10">
                    <div className=" flex justify-center items-center   lg:w-full lg:h-12 lg:flex ">
                        <div className="w-2 lg:w-14">
                        </div>
                        <div className="  flex justify-center items-center  lg:w-full">
                            <h2 className="playfair text-green-800 text-2xl lg:text-[3vw]" >BookYourTable</h2>
                        </div>
                        <div className=" sm:flex sm:justify-center sm:items-center hidden lg:mx-1 ">
                            <button onClick={onClose} className="text-gold cursor-pointer hover:text-white">
                        <MdOutlineCancel size={40}/>  
                            </button>
                        </div>
                    </div>
                    <div className=" my-5 flex justify-center  lg:w-full ">
                    <form className=" flex flex-col  lg:w-full lg:mx-96">
                        <div className=" flex flex-col  mt-10">
                            <label htmlFor="location" className="my-1 flex"><span className="mali-regular text-lg">Select Location</span><IoLocationSharp size={24} /><span className="text-red-500">*</span></label>
                            <select id="location" name="location" className=" border border-gold my-1 h-8 text-black cursor-pointer outline-none " required>
                                <option value="Select value" className="text-gray-300">Select Location...</option>
                                <option value="Market">Market </option>
                                <option value="Maruti Mandir">Maruti mandir</option>
                                <option value="Nachane">Nachane</option>
                            </select>
                        </div>
                        <div className=" flex flex-col  mt-3">
                            <label htmlFor="date" className="my-1 flex"><span className="mali-regular text-lg">Select Date</span><IoIosCalendar size={24} className="mx-1 mt-1" /><span className="text-red-500">*</span></label>
                            <input type="date" id="date" className="border border-gold h-10 cursor-pointer outline-none text-black px-1" required />
                            
                        </div>

                        <div className=" flex flex-col  mt-3  ">
                            <label htmlFor="time" className="my-1 flex"><span className="mali-regular text-lg">Select Time</span><AiOutlineClockCircle size={24} className="mt-1 mx-1" /><span className="text-red-500">*</span></label>
                            <input type="time" id="time" className="border border-gold my-1 h-10 text-black cursor-pointer outline-none p-1" />
                        </div>
                        <div className=" flex flex-col mx-5 mt-3 justify-center items-center">
                            <button className="navbtn">Submit</button>
                        </div>


                    </form>
                </div>
                </div>
 
            </div>
        </>
    )
}