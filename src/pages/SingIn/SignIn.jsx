import React from "react";
import { FcLock } from "react-icons/fc";
import { FcUnlock } from "react-icons/fc";
import Header from "../../components/H-Component/Header";
import Checkbox from "../../components/ChBox-Component/CheckBox";


export default function Signin() {

    const [isLocked, setIsLocked] = React.useState(true);

    function handleClick() {
        setIsLocked(prevState => !prevState);
    }

    const icon = isLocked ? <FcLock className="absolute right-0 bottom-2.5 cursor-pointer text-6.25" onClick={handleClick} /> : <FcUnlock className="absolute right-0 bottom-2.5 cursor-pointer text-6.25" onClick={handleClick} />

    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh_-_92px)] py-7 flex justify-center items-center">
                <div className="w-[70%] mx-800:w-[90%] max-w-175">
                    <h1 className="font-Airbnb text-center text-7 font-medium">Hello Again!</h1>
                    <p className="font-Urbanist font-normal text-PaleSky text-base text-center">Welcome Back You’ve Been Missed!</p>
                    <p className="loginBx__rule font-Urbanist text-lg my-8 mx-800:text-base mx-800:text-center">To login enter Your email address and password</p>
                    <form className="flex flex-col gap-6" method="get">
                        <div className="flex flex-col font-Urbanist relative">
                            <label htmlFor="user-email" className="font-Urbanist font-bold text-4 text-Zeus">Email Address</label>
                            <input type="text" name="user-email" id="user-email" className="py-2.5 text-4 indent-4 border-b-2 border-b-orangePeel bg-transparent focus:outline-none focus:bg-transparent"/>
                        </div>
                        <div className="flex flex-col font-Urbanist relative">
                            <label htmlFor="user-password" className="font-Urbanist font-bold text-4 text-Zeus">Password</label>
                            <input type={isLocked ? "password" : "text"} name="user-password" id="user-password" className="py-2.5 text-3xl indent-4 border-b-2 border-b-orangePeel bg-transparent focus:outline-none focus:bg-transparent"/>
                            {icon}
                        </div>
                        <Checkbox txt='Remember me' />
                        <input type="submit" className="cursor-pointer focus:border-none focus:outline-none bg-white text-awesome font-Outfit text-lg rounded-full py-2 w-1/4 m-auto" value='Login' />
                    </form>
                </div>
            </main>
        </>
    );
}