import Product from '../P-Component/Product';
import ProductsData from '../../products';

export default function EightProducts() {

    const myProducts = ProductsData.map(productObj => {
        return <Product {...productObj} key={productObj.id} />
    });

    return (
        <section className="py-[30px]">
            <h2 className="font-medium text-[2.5rem] text-almostBlack text-center">All Products</h2>
            <div className="flex justify-center flex-wrap gap-5 w-[95%] mx-auto mt-[35px] max-w-[1400px]">
                {myProducts}
            </div>
        </section>
    );
}