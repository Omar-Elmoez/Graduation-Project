import Header from '../../components/H-Component/Header';
import { useParams } from 'react-router-dom';
import ProductsData from '../../products';
import Btn from '../../components/Btn-Component/Btn';
import './ProductInfo.css'

export default function ProductInfo() {

    const sizes = ['XS', 'S', 'M', 'L'];
    let randomNum = Math.floor(Math.random() * 4);
    const showSizes = sizes.map((item, index) => {
        if(index === randomNum) {
            return <span key={index} className='active'>{item}</span>
        } else {
            return <span key={index}>{item}</span>
        }
    });

    const myObj = useParams();
    // We add (-1) because we start our ids in data file from 1 .
    // and when pass the id in the url and use it again like this => it starts from (0) as default.
    const clickedCard = ProductsData[myObj.id - 1];

    return (
        <>
            <Header />
            <div className='product'>
                <div className='product__imgBx'>
                    <img src={`/ProductsImgs/${clickedCard.img}`} />
                </div>
                <div className='product__txtBx'>
                    <div className='product__txtBx_content'>
                        {clickedCard.id > 15 && clickedCard.id < 25 &&<span className='product__txtBx_padge'>New!</span>}
                        <h1 className='product__txtBx_name'>{clickedCard.name} {clickedCard.id}</h1>
                        <span className='product__txtBx_quality'>High Quality</span>
                        <p className='product__txtBx_desc'>{clickedCard.description}</p>
                        <h3 className='product__txtBx_sizeTitle'>Size</h3>
                        <div className='product__txtBx_sizeOptions'>{showSizes}</div>
                        <h2 className='product__txtBx_price'>${clickedCard.price}</h2>
                        <Btn goTo='/SignIn' content='Add To Cart' styleClass='productInfo__linkBx' />
                    </div>
                </div>
            </div>
        </>
    );
}