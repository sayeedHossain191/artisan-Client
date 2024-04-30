import { MdStar } from "react-icons/md";
import { useLoaderData } from 'react-router-dom';

const ArtDetails = () => {

    const arts = useLoaderData()
    const { name, email, image, item, category, description, price, customization, stock, time, rating } = arts;


    return (
        <div>
            <div className='text-center mt-20 mb-10'>
                <h1 className='font-garamond text-5xl'>About Our Product</h1>
                <h3 className='font-josefin mt-2'>ART / CRAFT</h3>
            </div>

            <div className="hero min-h-screen bg-[#E5E5E5]">

                <div className="hero-content text-black flex-col lg:flex-row">
                    <img src={image} className="max-w-xl shadow-2xl" />
                    <div className="divider lg:divider-horizontal"></div>
                    <div>
                        <h3 className='font-josefin'>Email: {email}</h3>
                        <h3 className='font-josefin'>By: {name}</h3>

                        <h3 className='font-josefin'>Time: {time}</h3>
                        <h3 className='font-josefin'>Customization: {customization}</h3>

                        <h1 className="text-3xl font-bold font-garamond mt-2">{item}</h1>
                        <h2 className='text-xl mt-2 font-josefin'>{category}</h2>
                        <p className="py-6 font-josefin">{description}</p>
                        <div className='flex gap-32'>
                            <h3 className='font-josefin font-semibold'>Availability: {stock}</h3>
                            <div className='flex gap-2 font-josefin'>
                                <MdStar className='text-xl' />
                                <h3>{rating}</h3>
                            </div>
                        </div>

                        <h3 className='text-3xl font-garamond font-semibold mt-4'>$ {price}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtDetails;