"use client"
import Link from "next/link";
import Navstyle from "../../public/style/navbar.module.css"
import { useState } from "react";
import Booktable from "./booktable";
import { delay, motion, MotionConfig, useScroll, useSpring } from "framer-motion";
import Hamburgermenu from "./hamburgermenu";
import Hamburgermenulist from "./Hamburgermenulist";
export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHoveredhotel, setIsHoveredHotel] = useState(false);
  const [isHoveredevent, setIsHoveredEvent] = useState(false);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const main = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        delayChildren: 0.5
      },
    },
    hidden: {
      opacity: 0,

    },
  }

  const div1 = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
    }
  }

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "62%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "62%",
      },
    },
  };

  return (
    <>
      <motion.div className="bg-gold fixed top-0 bottom-0 left-0 right-0 origin-[0%]  h-2 z-50 " style={{ scaleX: scaleX }}>
      </motion.div>
      <nav className="  border border-b-2 flex w-full sm:flex h-36 lg:h-28 ">
        <motion.div initial="hidden" animate="visible" variants={main} className=" flex justify-center items-center sm:flex sm:justify-center sm:items-center  lg:mx-14 lg:w-full lg:flex lg:justify-center lg:items-center">
          <motion.div
          variants={div1}
          className=" flex justify-center items-center w-full h-full r lg:hidden  ">
            <MotionConfig
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <motion.button
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={() => setActive((pv) => !pv)}
                className="relative w-12 h-12  rounded-full bg-white/0 transition-colors hover:bg-white/20 z-20 mx-2"
              >
                <motion.span
                  variants={VARIANTS.top}
                  className="absolute h-1 w-10 bg-gold"
                  style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                  variants={VARIANTS.middle}
                  className="absolute h-1 w-10 bg-gold"
                  style={{ left: "50%", x: "-50%", top: "52%", y: "-50%" }}
                />
                <motion.span
                  variants={VARIANTS.bottom}
                  className="absolute h-1 w-10 bg-gold"
                  style={{
                    x: "-64%",
                    y: "100%",
                    bottom: "35%",
                    left: "50%",
                  }}
                />
              </motion.button>
            </MotionConfig>
          </motion.div>
          {
            active && <Hamburgermenu />
          }
          <motion.div variants={div1} className="hidden lg:flex lg:justify-center lg:items-center">
          <Link href="#hotels"  >
                    <button className="text-[5vw] text-gold uppercase w-full h-12  cursor-pointer hover:bg-gold hover:text-white   md:text-[4vw] lg:text-[1vw]  lg:w-24 lg:mx-3 lg:hover:bg-white lg:hover:text-gold lg:hover:underline" onMouseEnter={() => setIsHoveredHotel(true)}
                      onMouseLeave={() => setIsHoveredHotel(false)}><span >Hotels</span>
                    </button>
                  </Link>

          
          <button className="text-[5vw] text-gold uppercase w-full h-12  cursor-pointer hover:bg-gold hover:text-white  md:text-[4vw] md:w-full lg:text-[1vw]    lg:mx-3 lg:hover:bg-white lg:hover:text-gold lg:hover:underline" onMouseEnter={() => setIsHoveredEvent(true)}
                    onMouseLeave={() => setIsHoveredEvent(false)}><span >Events</span>
                    <ul className={isHoveredevent ? " lg:absolute  lg:z-50 lg:bg-white lg:w-40 lg:mt-2 lg:-ml-12 " : "hidden "}>
                      <Link href="/">
                        <li className="uppercase h-10 flex justify-center items-center hover:bg-gold hover:text-white text-sm text-gold" >Dinner</li>
                      </Link>
                      <Link href="/">
                        <li className="uppercase h-10 flex justify-center items-center hover:bg-gold hover:text-white text-sm text-gold" >Buisness Meeting</li>
                      </Link>
                      <Link href="/">
                        <li className="uppercase h-10 flex justify-center items-center hover:bg-gold hover:text-white text-sm text-gold" >Celbration</li>
                      </Link>
                      <Link href="/">
                        <li className="uppercase h-10 flex justify-center items-center hover:bg-gold hover:text-white text-sm text-gold" >Party</li>
                      </Link>
                    </ul>

                  </button>

          </motion.div>
            <motion.div variants={div1} className="  md:w-full md:text-center   ">
              <Link href="/">
                <h1 className="text-[9vw] text-green-500 playfair mx-1  md:text-[8vw] lg:text-[5vw] ">BookYourTable</h1>
              </Link>
            </motion.div>
          <motion.div variants={div1} className="hidden sm:hidden md:hidden lg:flex  ">
           <button className="navbtn" onClick={() => { setIsModalOpen(!isModalOpen), console.log("button is pressed") }} >
            <span>Book Table</span>
           </button>
           {
              isModalOpen && <Booktable isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            }
          </motion.div>
        </motion.div>
      </nav>

      
    </>
  )
}