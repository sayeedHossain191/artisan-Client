
import { useEffect, useState } from "react";



const ArtAndCraftCategories = () => {
    const [art, setArt] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/ceramicsAndPottery')
            .then(response => response.json())
            .then(data => setArt(data))

    }, [])

    return (
        <div>
            <div className="my-20">
                <h2 className='text-4xl font-garamond text-center '>VISIT OUR CATEGORY</h2>
                <h3 className='font-josefin text-center'>ART / CRAFT</h3>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-5xl place-items-center mx-32">
                {
                    art.map(categoryItem => <div key={categoryItem._id}>
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