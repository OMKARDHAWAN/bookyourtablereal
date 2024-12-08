import Link from "next/link";

export default function Hamburgermenulist({isHoveredevent}){
    return(
        <>
        <div className=" h-max ">
        <ul className={isHoveredevent ? " " : "hidden "}>
                      <Link href="/">
                        <li className="uppercase h-10 flex justify-center items-center hover:bg-gold hover:text-white text-sm text-gold md:text-[3vw]" >Dinner</li>
                      </Link>
                      <Link href="/">
                        <li className="uppercase h-10 flex justify-center items-center hover:bg-gold hover:text-white text-sm text-gold md:text-[3vw]" >Buisness Meeting</li>
                      </Link>
                      <Link href="/">
                        <li className="uppercase h-10 flex justify-center items-center hover:bg-gold hover:text-white text-sm text-gold md:text-[3vw]" >Celbration</li>
                      </Link>
                      <Link href="/">
                        <li className="uppercase h-10 flex justify-center items-center hover:bg-gold hover:text-white text-sm text-gold md:text-[3vw]" >Party</li>
                      </Link>
                    </ul>
        </div>
        </>
    )
}