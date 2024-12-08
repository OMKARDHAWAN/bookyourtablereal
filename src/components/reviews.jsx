import Image from "next/image"
import { motion } from "framer-motion"
export default function Review() {

    const review = [
        { id: 1, profile: "/images/profile/male.jpg", alt: "male profile photo", name: "John Doe", rating: "⭐⭐⭐⭐⭐", review: "Absolutely exceptional dining experience! From the moment we walked in, the ambiance was elegant and inviting. The staff was attentive and professional. Each dish was beautifully presented and bursting with flavor. The service was flawless, and the wine selection perfectly complemented the meal. Highly recommend for a memorable night out!" },
        { id: 2, profile: "/images/profile/female.jpg", alt: "female profile photo", name: "Jane Doe", rating: "⭐⭐⭐⭐", review: "An unforgettable dining experience! Exquisite food, flawless service, and a beautiful ambiance make it the perfect place for any occasion." }
    ]

    const div1 = {
        hidden:{
          scaleX:0
        },
        visible:{
          scaleX:1,
        }
      }

    return (
        <>
            <motion.div
             
         className="">
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className=" text-center">
                    <h2 className="font-bold text-2xl ">Review</h2>
                </motion.div>

                <div className="flex  p-5 flex-col justify-center items-center">
                    {
                        review.map((doc, index) => {
                            return (
                                <>
                                <motion.div initial={{
                opacity:0,
                scaleX:0
              }} 
              whileInView = {
                {
                  opacity:1,
                  scaleX:1,
              
                }
              }
              whileOutOfView = {
                {
                  opacity:0
                }
              }
              viewport={{
                amount: 0.5,
              }} 
               key={index}>

                                    <div className="flex   flex-col justify-center items-center my-24  rounded-xl shadow-2xl lg:w-96" >
                                        <div className="w-24 h-24  relative p-10">
                                            <Image src={doc.profile} fill className="absolute object-cover" alt="Profile image" />
                                        </div>
                                        <div className=" w-full p-5 text-center">
                                            <h1>{doc.name}</h1>
                                            <h2>{doc.rating}</h2>
                                            <p className=" p-5">{doc.review}</p>
                                        </div>
                                        {/* <h1>{doc.name}</h1>
                 <p>{doc.review}</p> */}
                                    </div>
                 </motion.div>
                                </>
                            )
                        })
                    }
                </div>

            </motion.div>
        </>
    )
}