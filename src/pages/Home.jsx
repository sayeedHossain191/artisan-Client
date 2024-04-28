
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import CraftItems from '../components/CraftItems';
import img1 from '../assets/tom-crew-t9sRlYIzfIQ-unsplash.jpg'

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

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} className="max-w-xl shadow-2xl" />
                    <div>
                        <h3 className='font-josefin'>By: Sayeed Hossain </h3>
                        <h3 className='font-josefin'>Email: sayeed.hossain191@gmail.com</h3>
                        <h3 className='font-josefin'>Time: 8:30 pm</h3>
                        <h3 className='font-josefin'>Customization: No</h3>

                        <h1 className="text-3xl font-bold font-garamond">Marin White Dinner Plate</h1>
                        <h2 className='text-xl mt-2 font-josefin'>Stoneware Material</h2>
                        <p className="py-6 font-josefin">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <h3 className='font-josefin'>Availability: In Stock</h3>

                        <h3 className='text-3xl font-garamond font-semibold'>$600.72</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;