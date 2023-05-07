import React from 'react';
import { NavLink } from 'react-router-dom';
/* eslint-disable react/prop-types */
import { VscHeartFilled } from 'react-icons/vsc';
import { CiHeart } from 'react-icons/ci';
import './Product.css';



export default function Product(props) {

    const [chosenProduct, setchosenProduct] = React.useState(props);

    function handleClick() {
        setchosenProduct(prevState => {
            return {
                ...prevState,
                isFavorite: !prevState.isFavorite,
            }
        })
    }

    let icon = chosenProduct.isFavorite ? <VscHeartFilled className='card__icon card__favoriteIcon' onClick={handleClick} /> : <CiHeart className='card__icon' onClick={handleClick} />;

    return (
        <div className='card'>
            {icon}
            <NavLink to={`/ProductInfo/${props.id}`}>
                <img src={`/ProductsImgs/${props.img}`} alt='clothes' className='card__img'/>
                <div className='card__textBx'>
                    <div className='card__info'>
                        <span className='card__info_name'>{props.name}</span>
                        <span className='card__info_price'>{props.price}$</span>
                    </div>
                    <p className='card__desc'>{props.description}</p>
                </div>
            </NavLink>
        </div>
    );
}