import swal from 'sweetalert';
const PhoneCard = ({phone}) => {

    const{id, image, phone_name, price, rating}= phone || {}


    const handelAddMore = ()=>{

      const addFavoritesArray = [];

      
        const favoritesItems = JSON.parse(localStorage.getItem('favorites'))

        if(!favoritesItems){
          addFavoritesArray.push(phone)
          localStorage.setItem('favorites',JSON.stringify(addFavoritesArray))
          swal("Good job!", "Products added successfully!", "success");
        }
        else{

          const isExits = favoritesItems.find(phone => phone.id === id)

          if(!isExits){
            addFavoritesArray.push(...favoritesItems,phone)
          localStorage.setItem('favorites',JSON.stringify(addFavoritesArray))
          swal("Good job!", "Products added successfully!", "success");

          }
          else{


            swal("error!", "No duplicate!", "error");
          }

          
        }
   
    

    }


    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
             <img
                src={image}
                alt="image"
                class="h-full w-full object-cover"
                />
         </div>
        <div class="p-6">
    <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      {phone_name}
    </h6>
    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {price}
    </h4>
    <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      {rating}
    </p>
    <a class="inline-block" href="#">
      <button onClick={handelAddMore}
        class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
       Add to Favourties
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
                </div>
        </div>
    );
};

export default PhoneCard;