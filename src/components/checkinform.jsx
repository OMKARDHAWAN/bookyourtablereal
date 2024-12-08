import Navstyle from "../../public/style/navbar.module.css";
export default function CheckinForm() {
    return (
        <>
            <div className=" flex flex-col justify-center items-center  lg:mx-10 ">
                <div className="">
                    <h2 className="text-xl font-bold form-title">Check Availability</h2>
                </div>
                <div className="my-3  ">
                    <form className="lg:flex lg:justify-center lg:items-center lg:flex-col">
                        <input type="date" className="border border-black h-12 w-64 px-5 mx-16 my-1 sm:mx-24 md:w-96 md:mx-48 " />
                        <input type="time" className="border border-black h-12 w-64 px-5 mx-16 my-1 sm:mx-24 md:w-96 md:mx-48" placeholder="Choose Time..." />
                        <select id="people" name="people" className="px-5 border border-black my-1 mx-16 h-12 w-64 text-black cursor-pointer outline-none sm:mx-24 md:w-96 md:mx-48" required>
                            <option value="Select value" className="text-gray-300">Select Member...</option>
                            <option value="2">2 </option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </form>
                </div>
                <div className="my-3">
                    <button className="navbtn "><span className="">Check Availability</span></button>
                </div>
            </div>

        </>
    )
}