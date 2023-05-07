import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from '../../assets/logoImg.png';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <NavLink to='/'>
                    <div className="header__logoBx">
                        <img src={logo} alt='shopping bag' className='header__logoImg' />
                        <span className='header__logoTxt'>Minimal <span className='header__logoTxt_span'>Shop</span>ping</span>
                    </div>
                </NavLink>
                <NavLink to='/SignIn'>
                    <FaUser className="header__userIcon"/>
                </NavLink>
            </div>
        </header>
    );
}