import Product from '../P-Component/Product';
import ProductsData from '../../products';

export default function EightProducts() {

    let myProducts = [];
    for(let i = 0; i < 8; i++) {
        let randomNum = Math.floor(Math.random() * ProductsData.length);
        let productObj = ProductsData[randomNum];
        // key={productObj.id} => will throw an error because randomNum may generate the same number twice
        // So, there is a product will appear twice in the page and the key will be duplicated.
        myProducts.push(<Product {...productObj} key={i}/>);
    }

    return (
        <section className="py-[30px]">
            <h2 className="font-medium text-[2.5rem] text-almostBlack text-center">Products</h2>
            <div className="flex justify-center flex-wrap gap-5 w-[95%] mx-auto mt-[35px] max-w-[1400px]">
                {myProducts}
            </div>
        </section>
    );
}