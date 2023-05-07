import Product from '../P-Component/Product';
import ProductsData from '../../products';

export default function EightProducts() {

    const myProducts = ProductsData.map(productObj => {
        return <Product {...productObj} key={productObj.id} />
    });

    return (
        <section className="products">
            <h2 className="products__heading">All Products</h2>
            <div className="products_container container">
                {myProducts}
            </div>
        </section>
    );
}