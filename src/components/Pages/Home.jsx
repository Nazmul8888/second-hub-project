
import Banner from "../Header/Banner/Banner";
import Phones from "../Header/Phones";
import { useLoaderData } from "react-router-dom";


const Home = () => {


    const phones = useLoaderData()
    return (
        <div>
           <Banner></Banner>
           <Phones phones ={phones}></Phones>
        </div>
    );
};

export default Home;