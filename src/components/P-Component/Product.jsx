import React from 'react';
import { NavLink } from 'react-router-dom';
/* eslint-disable react/prop-types */
import { VscHeartFilled } from 'react-icons/vsc';




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

    return (
        <div className='w-[250px] relative cursor-pointer'>
            <VscHeartFilled className={`absolute right-0 text-2xl ${chosenProduct.isFavorite ? "text-redPink" : "text-Ghost"}`} onClick={handleClick} />
            <NavLink to={`/ProductInfo/${props.id}`}>
                <img src={`/ProductsImgs/${props.img}`} alt='clothes' className='min-w-[230px] rounded-3xl'/>
                <div className='mt-[13px]'>
                    <div className='flex justify-between items-center text-almostBlack'>
                        <span className='text-base'>{props.name}</span>
                        <span className='text-xl text-darkOrange'>{props.price}$</span>
                    </div>
                    <p className='text-sm text-halfBlack leading-5 mt-[0.7em]'>{props.description}</p>
                </div>
            </NavLink>
        </div>
    );
}