import Header from '../../components/H-Component/Header';
import { useParams } from 'react-router-dom';
import ProductsData from '../../products';
import Btn from '../../components/Btn-Component/Btn';


export default function ProductInfo() {

    const sizes = ['XS', 'S', 'M', 'L'];
    let randomNum = Math.floor(Math.random() * 4);
    const showSizes = sizes.map((item, index) => {
        if(index === randomNum) {
            return <span key={index} className='w-[50px] h-[50px] leading-[50px] bg-hipBlue rounded-[50%]'>{item}</span>
        } else {
            return <span key={index} className='w-[50px] h-[50px] leading-[50px]'>{item}</span>
        }
    });

    const myObj = useParams();
    // We add (-1) because we start our ids in data file from 1 .
    // and when pass the id in the url and use it again like this => it starts from (0) as default.
    const clickedCard = ProductsData[myObj.id - 1];

    return (
        <>
            <Header />
            <div className='font-Inter flex justify-center items-center py-7 min-h-[calc(100vh_-_92px)] mx-800:flex-col'>
                <div className='h-[500px] w-full text-center'>
                    <img src={`/ProductsImgs/${clickedCard.img}`} className='h-full' />
                </div>
                <div className='w-full'>
                    <div className='bg-darkGray w-[70%] py-7 text-center rounded-[20px] mx-800:w-[95%] mx-800:m-auto'>
                        {clickedCard.id > 15 && clickedCard.id < 25 &&<span className='font-semibold text-sm text-darkOrange'>New!</span>}
                        <h1 className='font-bold text-4xl mt-5 text-oldGold'>{clickedCard.name} {clickedCard.id}</h1>
                        <span className='text-fadedBlue text-sm block -mt-2.5 mx-2 mb-2.5'>High Quality</span>
                        <p className='text-white w-[60%] mt-[1.5em] mx-auto mb-0 leading-relaxed'>{clickedCard.description}</p>
                        <h3 className='text-Rose text-2xl mt-[1em] mx-auto mb-[0.3em]'>Size</h3>
                        <div className='w-1/2 flex justify-around items-center text-Wheat m-auto'>{showSizes}</div>
                        <h2 className='text-Ghost text-2xl italic pt-[1em]'><span className='text-darkOrange text-2xl font-bold'>Price:</span> ${clickedCard.price}</h2>
                        <Btn goTo='/SignIn' content='Add To Cart' styleClass='productInfo__linkBx' />
                    </div>
                </div>
            </div>
        </>
    );
}