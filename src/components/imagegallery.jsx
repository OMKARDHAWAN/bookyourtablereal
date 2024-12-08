"use client"
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRightCircle } from "react-icons/bs";
export default function Imagegallery({ images }) {
    const [visibleImages, setVisibleImages] = useState(5); // Start by showing 6 images
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const loadMoreImages = () => {
        setVisibleImages((prev) => prev + 6); // Load 6 more images at a time
    };

    return (
        <>
            <motion.div  initial={{
          opacity:0
        }} 
        whileInView = {
          {
            opacity:1,
            transition:{
              duration:1
            }
          }
        }
        
        viewport={{
          amount:"0.5"
        }} className=" w-full flex flex-col  ">
                <div className="text-center "><h1 className="text-xl font-bold my-3 ">Photo Gallery</h1></div>
                <div className=" grid grid-cols-1  gap-y-5  md:grid md:place-items-center lg:grid lg:my-24 lg:grid-cols-6">
                    {
                        images.slice(0, visibleImages).map((image, index) => {
                            return (
                                <div className=" h-40 w-56 relative hover:opacity-80 cursor-pointer mx-11 xs:mx-20 sm:mx-24 md:mx-[35vw]  " key={image.id} onClick={() => setSelectedImage(image.src)}>
                                    <Image src={image.src} fill className="absolute object-cover " alt={image.alt} />
                                </div>
                            )
                        })
                    }
                    {visibleImages < images.length && (
                        <button className=" h-36 w-56 relative flex justify-center items-center mx-11 xs:mx-20 sm:mx-24 md:mx-[35vw]" onClick={loadMoreImages}>
                            <span className="flex">See More <BsArrowRightCircle size={24} className="mx-1" /></span>
                        </button>
                    )}
                </div>
            </motion.div>
        </>
    )
}