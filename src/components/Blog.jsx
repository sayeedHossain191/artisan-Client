import background1 from '../assets/af3e811add737629ddbeb88b2fe3e24b.png'

const Blog = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='font-garamond text-5xl'>Our Blog</h1>
                <h3 className='font-josefin'>ART / CRAFT</h3>
            </div>

            <div className='flex'>
                <div className="hero h-96 bg-base-200">
                    <div className="hero-content text-center ">
                        <h3 className='text-lg font-josefin'>TERRA COTTA</h3>
                        <div className="max-w-md">
                            <h1 className="text-3xl font-bold max-w-sm font-garamond mx-auto">THE HISTORY BEHIND TERRA COTTA ART</h1>
                            <p className="py-6 font-josefin">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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