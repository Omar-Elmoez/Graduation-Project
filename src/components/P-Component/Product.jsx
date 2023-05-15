import React from 'react';
import { NavLink } from 'react-router-dom';
/* eslint-disable react/prop-types */
import { VscHeartFilled } from 'react-icons/vsc';
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
// Apply Dynamic Style
    const iconStyle = {
        position: 'absolute',
        right: '0',
        fontSize: '25px',
        color: chosenProduct.isFavorite ? '#FF1055' : '#ccc'
    }

    return (
        <div className='card'>
            <VscHeartFilled style={iconStyle} onClick={handleClick} />
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