import "../../public/style/navbar.module.css"
export default function Restaurantinfo({info}){
    return(
        
        
                    <>
 <div className=" flex justify-center items-center  lg:mx-10">
                            <div className="flex flex-col justify-center items-center p-5  lg:w-full">
                                <h2 className="playfair-display-sc-bold text-2xl text-green-500">{info.Name}</h2>
                                <span>{info.star}</span>
                                <h2 className="my-1 text-lg"></h2>
                                <h2 className=" text-[3vw] text-center lg:text-[1vw]">{info.address}</h2>
                                <h2>{info.contact}</h2>
                                <div className="border w-full border-black my-3 lg:w-full"></div>
                            </div>
                        </div>
                    </>
             
    )
}