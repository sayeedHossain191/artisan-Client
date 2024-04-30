import background1 from '../assets/af3e811add737629ddbeb88b2fe3e24b.png'
import background2 from '../assets/pottery-wheel-process_600x600 1.png'
const About = () => {
    return (
        <div>
            <div className='text-center my-20'>
                <h2 className='text-4xl font-garamond font-bold'>ABOUT ARTISAN</h2>
                <p className='font-josefin max-w-md mx-auto'>Artisan's handmade ceramic products have been around since 1950, let's explore our journey</p>
            </div>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-28'>
                <div className="hero h-96 bg-base-200">
                    <div className="hero-content text-center ">
                        <div className="max-w-md">
                            <h1 className="text-3xl font-bold max-w-sm font-garamond mx-auto">MADE IN BANGLADESH SINCE 1950</h1>
                            <p className="py-6 font-josefin">The best-selling art subjects include: Traditional landscapes: Landscapes, such as beach scenes, rolling hills, and impressionistic landscapes, elicit a sense of peacefulness and calm, often evoking nostalgic memories in the viewer.</p>
                            <a className="link font-josefin font-bold">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div className="hero h-96" style={{ backgroundImage: `url(${background1})` }}>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-28'>
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