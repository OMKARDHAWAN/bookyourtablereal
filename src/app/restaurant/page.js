"use client"
import Image from "next/image";
import Navstyle from "../../../public/style/navbar.module.css"
import Restaurantinfo from "@/components/restaurantinfo";
import CheckinForm from "@/components/checkinform";
import Restaurantabout from "@/components/restaurantabout";
import Imagegallery from "@/components/imagegallery";
import Review from "@/components/reviews";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { delay, motion, useScroll } from "framer-motion";



export default function Page() {
    // get id from url and 
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const images = [
        { id: 1, src: "/images/royalsawant/tacos.jpg", alt: "Tacos image..." },
        { id: 2, src: "/images/royalsawant/wine.jpg", alt: " wine image..." },
        { id: 3, src: "/images/royalsawant/mojito.jpg", alt: "mojito image..." },
        { id: 4, src: "/images/royalsawant/Oyster.jpg", alt: "oyster image..." },
        { id: 5, src: "/images/royalsawant/noddles.jpg", alt: "noddels image..." },
        { id: 6, src: "/images/royalsawant/pancake.jpg", alt: "pancake image..." },
        { id: 7, src: "/images/royalsawant/budwiser.jpeg", alt: "budwiser image..." },
        { id: 8, src: "/images/royalsawant/table.jpeg", alt: "table image..." },
        { id: 9, src: "/images/royalsawant/family.jpeg", alt: "family image..." },
        { id: 10, src: "/images/royalsawant/tacos.jpg", alt: "tacos image..." }
    ]

    const restaurantdetail = [
        {
            id: 1,
            restaurantinfo: { Name: "The Royal Sawant", star: "⭐⭐⭐⭐⭐", address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit A4578", contact: "+91 123456789" },
            about: "Royal Sawant Palace stands as a beacon of luxury, making it the ideal choice for unforgettable events. This exquisite five-star hotel features a variety of elegant venues, each designed to accommodate everything from intimate gatherings to grand celebrations. With stunning décor and state-of-the-art facilities, every detail is meticulously crafted to ensure a seamless experience. The hotel's exceptional service is complemented by a tailored catering menu, offering a diverse selection of gourmet dishes to satisfy every palate. Whether it’s a wedding, corporate event, or a festive party, Royal Sawant Palace combines sophistication with comfort, promising an unforgettable experience for all guests.",
            photogallary: images,
            backgorundImg: "/images/royalsawant/royalsawant.jpg"
        },
        {
            id: 2,
            restaurantinfo: { Name: "Blue Ocean", star: "⭐⭐⭐⭐⭐", address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit b7875", contact: "+91 123456789" },
            about: "Blue Ocean is a sophisticated venue perfect for business meetings and conferences. With private dining spaces and state-of-the-art audiovisual facilities, it creates an ideal atmosphere for professional gatherings. Enjoy a curated menu and exceptional service, ensuring your events are both productive and enjoyable, making every meeting a memorable experience.",
            photogallary: images,
            backgorundImg: "/images/blueocean/blueocean.jpg"
        },
        {
            id: 3,
            restaurantinfo: { Name: "GreenLeaf", star: "⭐⭐⭐⭐⭐", address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit C-57989", contact: "+91 123456789" },
            about: "GreenLeaf is a charming three-star hotel perfect for family dinners, office parties, and conferences. With a welcoming atmosphere and comfortable accommodations, it offers a cozy restaurant ideal for intimate gatherings. Enjoy friendly service and delicious meals, making every occasion memorable and enjoyable for both casual and professional events.",
            photogallary: images,
            backgorundImg: "/images/greenleaf/greenleaf.jpg"
        },

    ]
    
    const restaurant = restaurantdetail.find((doc) => doc.id.toString() === id);

    const main = {
        visible: {
            opacity: 1,

            transition: {
                when: "beforeChildren",
                staggerChildren: 0.5,
                delayChildren: 0.5,
                delay: 1.5
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
            transition: {
                delay: 0.9
            }
        }
    }
    const div2 = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 1.3
            }
        }
    }

    return (
        <>
        

            <motion.div ref={main}
                initial="hidden"
                animate="visible"
                variants={main}
                className="w-full main ">
                {restaurant ? (
                    <>
                        <motion.div
                            variants={div1}
                            className=" relative w-full h-64  ">
                            <Image src={restaurant.backgorundImg} alt="restaurant background image..." className="object-cover" fill />
                        </motion.div>
                        <motion.div variants={div2}
                            className="">
                            <div  className=" bg-white w-full h-max  shadow-2xl relative -top-28  ">
                                <Restaurantinfo info={restaurant.restaurantinfo} />
                                <CheckinForm />
                            </div>
                            <motion.div className=" ">
                                <Restaurantabout about={restaurant.about} />
                            </motion.div>

                            <div className="mt-64 ">
                                <Imagegallery images={restaurant.photogallary} />
                            </div>
                            <div className=" mt-24  ">
                                <Review />
                            </div>
                        </motion.div>
                    </>
                ) : (
                    <p>No restaurant found with that ID</p>
                )}

            </motion.div>
        </>
    )
}