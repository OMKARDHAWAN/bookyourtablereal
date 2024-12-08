"use client"
import Image from "next/image";
import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Slide() {
  const images = [
    "/images/lacuisine.jpg",
    "/images/aesthatic.jpg",
    "/images/night.jpeg",
    "/images/restaurant.jpeg"
  ]

  const main = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delay: 2,
        staggerChildren: 0.5,
        delayChildren: 0.5
      },
    },
    hidden: {
      opacity: 0,

    },
  }

  const img = {
    hidden: {
      opacity: 0
    },
    visible: {
      transition: {
        duration: 0.5
      },
      opacity: 1,
    }
  }
  const intromsg = {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",

        staggerChildren: 0.5,
        delayChildren: 0.5
      }
    }
  }
  const heading = {
    hidden: {
      x: -30,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }
  const heading1 = {
    hidden: {
      x: 30,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }
  const heading2 = {
    hidden: {
      x: -30,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,


      }
    }
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
      <div className="h-[600px] md:h-[600px] lg:mx-10">
        <motion.div className=" relative h-[600px] md:h-[700px]" initial="hidden"
          animate="visible"
          variants={main}
        >
          <motion.div variants={img} className=" absolute z-0 w-full h-full ">
            <Image src={images[currentIndex]} alt={`Hotel wallpaper...`}
              fill  // Covers the entire parent div
              // Adjusts the image size while preserving aspect ratio
              className="inset-0 object-cover"
            />
          </motion.div>
          <motion.div variants={intromsg} className=" absolute z-0 w-full h-max  mt-64 flex justify-start bg-black bg-opacity-15 backdrop-blur-sm items-center flex-col">
            <motion.h2 variants={heading} className=" text-2xl tracking-wider uppercase text-white lg:text-[2vw]">Welcome to</motion.h2>
            <motion.h2 variants={heading1} className="text-[10vw] playfair-display-sc-bold  text-white lg:text-[5vw]" >BookYourTable</motion.h2>
            <motion.h3 variants={heading2} className="text-[4vw] text-white  text-center lg:text-[1vw]">Reserve a table at your preferred restaurant in the area.!!!</motion.h3>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}