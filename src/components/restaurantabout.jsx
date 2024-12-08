import { motion, useScroll, useTransform } from "framer-motion"

export default function Restaurantabout({about}){

  return(
        <>
        <motion.div 
        initial={{
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
        whileOutOfView = {
          {
            opacity:0
          }
        }
        viewport={{
          amount:"0.5"
        }}
        className=" lg:mx-10 "  >
         <div className="w-full "><h2 className="text-2xl font-bold my-3 mx-3">About</h2></div>
         <div className="">
           <p className="text-justify my-3 mx-3">{about}</p>
         </div>
        </motion.div>
        </>
    )
}