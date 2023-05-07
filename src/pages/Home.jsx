import Header from '../components/H-Component/Header';
import Hero from "../components/He-Component/Hero";
import EightProducts from "../components/GroupOfProducts/EightProducts";
import Btn from '../components/Btn-Component/Btn';
export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <EightProducts />
            <Btn goTo='/ProductsPage' content='See More' styleClass='home__linkBx' />
        </>
    );
}

