
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import CraftItems from '../components/CraftItems';
import img1 from '../assets/tom-crew-t9sRlYIzfIQ-unsplash.jpg'
import background1 from '../assets/af3e811add737629ddbeb88b2fe3e24b.png'
import background2 from '../assets/pottery-wheel-process_600x600 1.png'
import { MdStar } from "react-icons/md";

const Home = () => {
    const arts = useLoaderData()
    return (
        <div>
            {/* <Banner /> */}

            <div className='mx-32 my-40 grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    arts.map(art => <CraftItems key={art._id} art={art}></CraftItems>)
                }
            </div>

            <h1>About Product Item</h1>
            <h3>ART / CRAFT</h3>
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

            <div className='text-center my-20'>
                <h2 className='text-3xl font-garamond font-bold'>ABOUT ARTISAN</h2>
                <p className='font-josefin max-w-md mx-auto'>Artisan's handmade ceramic products have been around since 1650, let's explore our journey</p>
            </div>

            <div className='flex'>
                <div className="hero h-96 bg-base-200">
                    <div className="hero-content text-center ">
                        <div className="max-w-md">
                            <h1 className="text-3xl font-bold max-w-sm font-garamond mx-auto">MADE IN BANGLADESH SINCE 1950</h1>
                            <p className="py-6 font-josefin">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <a className="link font-josefin font-bold">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div className="hero h-96" style={{ backgroundImage: `url(${background1})` }}>
                </div>
            </div>
            <div className='flex'>
                <div className="hero h-96" style={{ backgroundImage: `url(${background2})` }}>
                </div>
                <div className="hero h-96 bg-base-200">
                    <div className="hero-content text-center ">
                        <div className="max-w-md">
                            <h1 className="text-3xl font-bold max-w-sm font-garamond mx-auto">OUR HISTORY</h1>
                            <p className="py-6 font-josefin"> Pottery is a type of ceramics that specifically involves shaping and firing clay to create functional or decorative objects</p>
                            <a className="link font-josefin font-bold">READ MORE</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;