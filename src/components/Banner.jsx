import img1 from '../assets/AdobeStock_716144522_Preview.jpeg'
import './Banner.css'
const Banner = () => {


    document.addEventListener('click', function () {
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').appendChild(items[0])
    })

    document.addEventListener('click', function () {
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').prepend(items[items.length - 6]) // here the length of items = 6
    })

    return (
        <div>
            <div className="container">

                <div className="slide">


                    <div className="item" style={{ backgroundImage: `url(${img1})` }}>
                        <div className="content">
                            <div className="name">Switzerland</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="name text-black">Finland</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="name">Iceland</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className="item" >
                        <div className="content">
                            <div className="name">Australia</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="name">Netherland</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <div className="name">Ireland</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button>See More</button>
                        </div>
                    </div>

                </div>

                <div className="button">
                    <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
                    <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
                </div>

            </div>
        </div>
    );
};

export default Banner;