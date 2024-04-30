
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import CraftItems from '../components/CraftItems';
import img1 from '../assets/tom-crew-t9sRlYIzfIQ-unsplash.jpg'

import { MdStar } from "react-icons/md";
import About from '../components/About';
import ArtAndCraftCategories from '../components/ArtAndCraftCategories';

const Home = () => {
    const arts = useLoaderData()
    return (
        <div>
            <Banner />
            <ArtAndCraftCategories />
            <div className='mx-32 my-40 grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    arts.map(art => <CraftItems key={art._id} art={art}></CraftItems>)
                }
            </div>

            <div className='text-center'>
                <h1 className='font-garamond text-5xl'>About Our Product</h1>
                <h3 className='font-josefin'>ART / CRAFT</h3>
            </div>

            <div className="hero min-h-screen bg-[#E5E5E5]">

                <div className="hero-content text-black flex-col lg:flex-row">
                    <img src={img1} className="max-w-xl shadow-2xl" />
                    <div className="divider lg:divider-horizontal"></div>
                    <div>
                        <h3 className='font-josefin'>Email: sayeed.hossain191@gmail.com</h3>
                        <h3 className='font-josefin'>By: Sayeed Hossain </h3>

                        <h3 className='font-josefin'>Time: 8:30 pm</h3>
                        <h3 className='font-josefin'>Customization: No</h3>

                        <h1 className="text-3xl font-bold font-garamond mt-2">Marin White Dinner Plate</h1>
                        <h2 className='text-xl mt-2 font-josefin'>Stoneware Material</h2>
                        <p className="py-6 font-josefin">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='flex gap-32'>
                            <h3 className='font-josefin'>Availability: In Stock</h3>
                            <div className='flex gap-2 font-josefin'>
                                <MdStar className='text-xl' />
                                <h3>5.0</h3>
                            </div>
                        </div>

                        <h3 className='text-3xl font-garamond font-semibold mt-4'>$ 600.72</h3>
                    </div>
                </div>
            </div>

            <About />

        </div>
    );
};

export default Home;