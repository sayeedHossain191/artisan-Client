import { GiPencilBrush } from "react-icons/gi";
import { Link } from "react-router-dom";

const CraftItems = ({ art }) => {

    const { name, email, image, item, category, description, price, customization, stock, time, _id } = art;


    return (
        <div>
            <div className="w-96 h-96 bg-base-100 border-none">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="mt-6">
                    <h2 className="card-title font-josefin text-2xl">
                        {item}
                        <div className="badge bg-[#2B4248] h-10 w-10"><GiPencilBrush className="text-xl" /></div>
                    </h2>
                    <p className='font-josefin mt-4'>{description}</p>

                    <div className="flex items-center justify-between mt-2">
                        <h3 className='text-3xl font-garamond font-semibold'>$ {price}</h3>
                        <h3 className="text-xl font-garamond">{stock}</h3>
                    </div>

                    <Link to={`/details/${_id}`}>
                        <div className="card-actions">
                            <button className="btn bg-[#D1D5DB] text-black w-full rounded-none mt-4">View Details</button>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CraftItems;