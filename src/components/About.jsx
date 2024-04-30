import background1 from '../assets/af3e811add737629ddbeb88b2fe3e24b.png'
import background2 from '../assets/pottery-wheel-process_600x600 1.png'
const About = () => {
    return (
        <div>
            <div className='text-center my-20'>
                <h2 className='text-3xl font-garamond font-bold'>ABOUT ARTISAN</h2>
                <p className='font-josefin max-w-md mx-auto'>Artisan's handmade ceramic products have been around since 1950, let's explore our journey</p>
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

export default About;