"use client"
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { BsArrowRightCircle } from "react-icons/bs";
import Navstyle from "../../public/style/navbar.module.css"
import Image from "next/image";
import Link from "next/link";


export default function Crouser() {
    const hoteldetails = [
        {
            id: 1, image: "/images/royalsawant/royalsawant.jpg", name: "Royal Sawant", rating: "⭐⭐⭐⭐⭐", desc: "Royal Sawant Palace is a luxurious five-star hotel ideal for unforgettable events. With elegant venues for parties and dinners, it offers exceptional service and tailored catering. Perfect for both intimate gatherings and grand functions, Royal Sawant Palace ensures a memorable experience, blending sophistication and comfort for every occasion."
        },
        {
            id: 2, image: "/images/blueocean/blueocean.jpg", name: "Blue Ocean", rating: "⭐⭐⭐⭐⭐", desc: "Blue Ocean is a sophisticated venue perfect for business meetings and conferences. With private dining spaces and state-of-the-art audiovisual facilities, it creates an ideal atmosphere for professional gatherings. Enjoy a curated menu and exceptional service, ensuring your events are both productive and enjoyable, making every meeting a memorable experience."
        },
        {
            id: 3, image: "/images/greenleaf/Greenleaf.jpg", name: "GreenLeaf", rating: "⭐⭐⭐", desc: "GreenLeaf is a charming three-star hotel perfect for family dinners, office parties, and conferences. With a welcoming atmosphere and comfortable accommodations, it offers a cozy restaurant ideal for intimate gatherings. Enjoy friendly service and delicious meals, making every occasion memorable and enjoyable for both casual and professional events."
        }
    ]

    // State to store swiper instance and ensure it's available
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    // The Swiper instance
    const swiper = useSwiper(); // Use the hook to get access to Swiper instance

    const handleSwiperInit = (swiper) => {
        setSwiperInstance(swiper); // Store the Swiper instance once it's initialized
    };

    const nextSlide = () => {
        if (swiperInstance) {
            swiperInstance.slideNext(); // Ensure swiperInstance is not null
        }
    };

    const prevSlide = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev(); // Ensure swiperInstance is not null
        }
    };


    return (
        <>
            <div className=" my-36   lg:h-[50vw] lg:px-10 " id="hotels">
                <div className="  h-full   w-full s lg:flex  lg:p-10 ">
             <div className='  lg:flex lg:justify-center lg:items-start w-full'>
                
                    <div className="  w-24 hidden lg:w-36 lg:h-full lg:flex lg:justify-center lg:items-center " >
                        <button className="w-24 h-24 text-black hover:text-white  rounded-full flex justify-center items-center border border-gold hover:bg-gold transition-all 0.3s ease-linear " onClick={prevSlide}>
                            <GoArrowLeft size={34} className="" />
                        </button>
                    </div>
                        <div className=' lg:w-full lg:h-full lg:flex lg:justify-center lg:items-start'>
             {/* <div className='lg:border lg:border-red-500 lg:h-full lg:w-full'>
4
             </div> */}
                        <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        onInit={handleSwiperInit}
                        modules={[Pagination, Navigation]}
                        className=' lg:flex lg:justify-start  lg:w-[1100px] lg:h-full'
>
    <SwiperSlide className=''>
    <div className=''>
                                                <div className="  my-16  relative flex  lg:flex  ">
                                                    <div className=" hidden  lg:mx-5 lg:my-10 lg:w-[50%] lg:relative lg:flex ">
                                                        <Image src="/images/royalsawant/royalsawant.jpg" className="lg:absolute lg:object-cover " fill alt={`Image about royalsawant...`} />
                                                    </div>
                                                    <div className="border border-green-800 w-full p-3  lg:p-3 lg:w-[50%]">
                                                        <h2 className="text-xl playfair-display-sc-bold  text-green-800 lg:text-[2vw] ">Royal Sawant</h2>
                                                        <div className=" border border-gold my-3 "></div>
                                                        <h2 className="text-lg  ">⭐⭐⭐⭐⭐</h2>
                                                        <p className="mt-4 text-justify">
                                                         Royal Sawant Palace is a luxurious five-star hotel ideal for unforgettable events. With elegant venues for parties and dinners, it offers exceptional service and tailored catering. Perfect for both intimate gatherings and grand functions, Royal Sawant Palace ensures a memorable experience, blending sophistication and comfort for every occasion.
                                                        </p>
                                                        <ul className="py-3 mx-6 ">
                                                            <li className="my-1">
                                                                <span>Monday</span>:<span className="mx -3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Tuesday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Wednesday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Thursday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Friday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Saturday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Sunday closed</span>
                                                            </li>
                                                        </ul>
                                                        <Link href="/restaurant?id=1">
                                                            <button className="navbtn mx-5 flex justify-center items-center"  >
                                                                <span className="flex  justify-center items-center">View Schedule <BsArrowRightCircle size={24} className="mx-1 my-3" /></span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
    </SwiperSlide>
 
<SwiperSlide>
<div className=''>
                                                <div className="my-16  relative flex  lg:flex " >
                                                    <div className="hidden lg:mx-5 lg:my-10 lg:w-[50%] lg:relative lg:flex ">
                                                        <Image src="/images/blueocean/blueocean.jpg" className="lg:absolute lg:object-cover " fill alt={`Image about BlueOcean...`} />
                                                    </div>
                                                    <div className="border border-green-800 w-full p-3  lg:p-3 lg:w-[50%] ">
                                                        <h2 className="text-xl playfair-display-sc-bold  text-green-800 ">Blue Ocean</h2>
                                                        <div className=" border  border-gold my-3 "></div>
                                                        <h2 className="text-lg ">⭐⭐⭐⭐⭐</h2>
                                                        <p className="mt-4 text-justify ">
                                                        Blue Ocean is a sophisticated venue perfect for business meetings and conferences. With private dining spaces and state-of-the-art audiovisual facilities, it creates an ideal atmosphere for professional gatherings. Enjoy a curated menu and exceptional service, ensuring your events are both productive and enjoyable, making every meeting a memorable experience.
                                                        </p>
                                                        <ul className="py-3 mx-6 ">
                                                            <li className="my-1">
                                                                <span>Monday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Tuesday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Wednesday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Thursday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Friday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Saturday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Sunday closed</span>
                                                            </li>
                                                        </ul>
                                                        <Link href="/restaurant?id=2">
                                                            <button className="navbtn mx-5 flex justify-center items-center"  >
                                                                <span className="flex  justify-center items-center">View Schedule <BsArrowRightCircle size={24} className="mx-1 my-3" /></span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
</SwiperSlide>
<SwiperSlide className=' '> 
<div className=''>
                                                <div className="my-16  relative flex  lg:flex " >
                                                    <div className="hidden  lg:mx-5 lg:my-10 lg:w-[50%] lg:relative lg:flex ">
                                                        <Image src="/images/greenleaf/Greenleaf.jpg" className="lg:absolute lg:object-cover " fill alt={`Image about BlueOcean...`} />
                                                    </div>
                                                    <div className="border border-green-800 w-full p-3  lg:p-3 lg:w-[50%] ">
                                                        <h2 className="text-xl playfair-display-sc-bold  text-green-800 ">GreenLeaf</h2>
                                                        <div className=" border  border-gold my-3 "></div>
                                                        <h2 className="text-lg ">⭐⭐⭐</h2>
                                                        <p className="mt-4 text-justify ">
                                                        GreenLeaf is a charming three-star hotel perfect for family dinners, office parties, and conferences. With a welcoming atmosphere and comfortable accommodations, it offers a cozy restaurant ideal for intimate gatherings. Enjoy friendly service and delicious meals, making every occasion memorable and enjoyable for both casual and professional events.
                                                        </p>
                                                        <ul className="py-3 mx-6 ">
                                                            <li className="my-1">
                                                                <span>Monday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Tuesday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Wednesday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Thursday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Friday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Saturday</span>:<span className="mx-3"> 9.00 am - 10 am </span>
                                                            </li>
                                                            <li className="my-1">
                                                                <span>Sunday closed</span>
                                                            </li>
                                                        </ul>
                                                        <Link href="/restaurant?id=2">
                                                            <button className="navbtn mx-5 flex justify-center items-center"  >
                                                                <span className="flex  justify-center items-center">View Schedule <BsArrowRightCircle size={24} className="mx-1 my-3" /></span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                         
</SwiperSlide>
</Swiper>
                            </div>
       

                <div className="  w-24 hidden lg:w-36 lg:h-full lg:flex lg:justify-center lg:items-center " >
                    <button className="w-24 h-24 text-black hover:text-white border  border-gold rounded-full flex justify-center items-center hover:bg-gold transition-all 0.3s ease-linear " onClick={nextSlide}>
                        <GoArrowRight size={34} className="" />
                    </button>
                </div>
                        </div>
            </div>
                </div>
        </>

    )
}

