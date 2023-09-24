
import Footer from "../Footer/Footer";
import Banner from "../Header/Banner/Banner";
import Phones from "../Header/Phones";
import { useLoaderData } from "react-router-dom";


const Home = () => {


    const phones = useLoaderData()
    return (
        <div>
           <Banner></Banner>
           <Phones phones ={phones}></Phones>
           <Footer></Footer>
        </div>
    );
};

export default Home; 