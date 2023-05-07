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
        <section className="products">
            <h2 className="products__heading">Products</h2>
            <div className="products_container container">
                {myProducts}
            </div>
        </section>
    );
}