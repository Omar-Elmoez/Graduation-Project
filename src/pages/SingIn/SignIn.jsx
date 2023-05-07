import React from "react";
import { FcLock } from "react-icons/fc";
import { FcUnlock } from "react-icons/fc";
import Header from "../../components/H-Component/Header";
import Checkbox from "../../components/ChBox-Component/CheckBox";
import './Singin.css';

export default function Signin() {

    const [isLocked, setIsLocked] = React.useState(true);

    function handleClick() {
        setIsLocked(prevState => !prevState);
    }

    const icon = isLocked ? <FcLock className="loginBx__info__lockIcon" onClick={handleClick} /> : <FcUnlock className="loginBx__info__lockIcon" onClick={handleClick} />

    return (
        <>
            <Header />
            <main className="loginBx">
                <div className="loginBx__content">
                    <h1 className="loginBx__heading">Hello Again!</h1>
                    <p className="loginBx__greetingMsg">Welcome Back You’ve Been Missed!</p>
                    <p className="loginBx__rule">To login enter Your email address and password</p>
                    <form className="loginBx__form" method="get">
                        <div className="loginBx__info">
                            <label htmlFor="user-email" className="loginBx__info__label">Email Address</label>
                            <input type="text" name="user-email" id="user-email" className="loginBx__info__input"/>
                        </div>
                        <div className="loginBx__info">
                            <label htmlFor="user-password" className="loginBx__info__label">Password</label>
                            <input type={isLocked ? "password" : "text"} name="user-password" id="user-password" className="loginBx__info__input"/>
                            {icon}
                        </div>
                        <Checkbox txt='Remember me' />
                        <input type="submit" className="loginBx__form__submit" value='Login' />
                    </form>
                </div>
            </main>
        </>
    );
}