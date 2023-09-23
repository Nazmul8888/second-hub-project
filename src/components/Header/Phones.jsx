import PhonesCard from "./PhonesCard";



const Phones = ({phones}) => {

    console.log(phones);

    return (
        <div className="py-10">
            <h2 className=" text-3xl font-semibold flex justify-center items-center">All phones Category List</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {
                    phones.map(phone=><PhonesCard phone={phone}></PhonesCard>)
                }
            </div>
        </div>
    );
};

export default Phones;