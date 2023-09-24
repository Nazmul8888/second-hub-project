import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';
import FavoriteCard from './FavoriteCard';

const Favourite = () => {

    const [favorites, setFavorites] = useState([])
    const [notFound, setNotFound] = useState([''])

    useEffect(()=>{
        const favoritesItems = JSON.parse(localStorage.getItem('favorites'));
        
        if(favoritesItems){
            setFavorites(favoritesItems)
        }
        else{
            setNotFound('Not data found')
        }


    },[])

    // console.log(favorites);
    return (
        <div>
        {
            notFound? <p className='h-[80vh] flex justify-center items-center'>No data found</p> 
            
            : <div>

          <div>
                    {
                        favorites.map(phone=> <FavoriteCard phone={phone}></FavoriteCard>)
                    }
                </div>


            </div>
        }
        </div>
    );
};

export default Favourite;