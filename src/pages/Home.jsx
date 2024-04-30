
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import CraftItems from '../components/CraftItems';
//import img1 from '../assets/tom-crew-t9sRlYIzfIQ-unsplash.jpg'
import Lottie from "lottie-react";
import craft from '../../public/craft.json'
import art from '../../public/art.json'
import About from '../components/About';
import ArtAndCraftCategories from '../components/ArtAndCraftCategories';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Blog from '../components/Blog';


const Home = () => {
    const arts = useLoaderData()

    const { text } = useTypewriter({
        words: ['ARTISAN', 'ART', 'CRAFT'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })


    return (
        <div>
            <div className='mx-auto flex justify-center my-20'>
                <Lottie className='w-40' animationData={art} />
                <Lottie className='w-32' animationData={craft} />
            </div>

            <h1 className='text-7xl text-center font-garamond'>WELCOME TO ARTISAN<span>{text}</span>
                <Cursor /></h1>


            <Banner />
            <ArtAndCraftCategories />
            <div className='mx-32 my-40 grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    arts.map(art => <CraftItems key={art._id} art={art}></CraftItems>)
                }
            </div>


            <About />
            <Blog />
        </div>
    );
};

export default Home;