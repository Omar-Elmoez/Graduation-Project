import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from '../../assets/logoImg.png';

export default function Header() {
    return (
        <header className="bg-white shadow-C2">
            <div className="container flex justify-between items-center py-5">
                <NavLink to='/'>
                    <div className="flex justify-center items-center gap-2.5">
                        <img src={logo} alt='shopping bag' className='mx-480:w-7.5' />
                        <span className='text-darkOrange text-8 mx-480:text-base'>Minimal <span className='text-awesome'>Shop</span>ping</span>
                    </div>
                </NavLink>
                <NavLink to='/SignIn'>
                    <FaUser className="mx-480:text-base text-2xl text-awesome animate-inOut"/>
                </NavLink>
            </div>
        </header>
    );
}