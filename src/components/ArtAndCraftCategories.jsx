import { useLoaderData } from "react-router-dom";


const ArtAndCraftCategories = () => {

    const loadedCategories = useLoaderData()

    return (
        <div>
            <h2 className='text-3xl font-garamond text-center my-20'>VISIT OUR CATEGORY</h2>


            <div className="grid grid-cols-3 gap-6 max-w-5xl place-items-center mx-32">
                {
                    loadedCategories.map(categoryItem => <div key={categoryItem._id}>
                        <div className="w-80 h-80 bg-base-100 shadow-xl mx-32">
                            <figure><img src={categoryItem.image} alt="Shoes" /></figure>
                            <div className="card-body items-center">
                                <h2 className="card-title">{categoryItem.subcategory}</h2>
                            </div>
                        </div>

                    </div>)
                }
            </div>



        </div>
    );
};

export default ArtAndCraftCategories;