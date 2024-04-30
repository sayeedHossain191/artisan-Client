import background1 from '../assets/photography-1518997_1280.jpg'

const Blog = () => {
    return (
        <div>
            <div className='text-center my-20'>
                <h1 className='font-garamond text-5xl'>OUR BLOG</h1>
                <h3 className='font-josefin mt-2'>ART / CRAFT</h3>
            </div>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-28 mb-20'>
                <div className="hero h-96 bg-base-200">
                    <div className="hero-content text-center ">

                        <div className="max-w-md ">
                            <h3 className='text-lg font-josefin my-4'>TERRA COTTA</h3>
                            <h1 className="text-3xl font-bold max-w-sm font-garamond mx-auto">THE HISTORY BEHIND TERRA COTTA ART</h1>
                            <p className="py-6 font-josefin">Terracotta tiles have been used in homes for centuries. They continue to be a popular choice for their classic, timeless style. Versatility: They come in various terra cotta patterns – shapes, sizes, and finishes. </p>
                            <a className="link font-josefin font-bold">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div className="hero h-96" style={{ backgroundImage: `url(${background1})` }}>
                </div>
            </div>
        </div>
    );
};

export default Blog;