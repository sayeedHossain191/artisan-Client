import slide1 from '../assets/chloe-bolton-L_bXRw-bZ9I-unsplash.jpg'
import slide2 from '../assets/china-805184_1280.jpg'
import slide3 from '../assets/smiley-artist-painting-clay-pot.jpg'
import slide4 from '../assets/ceramic-pitcher-6774287_1280.jpg'
import slide5 from '../assets/view-ceramic-pottery-items.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../src/style.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Marquee from "react-fast-marquee";
const Banner = () => {


    return (
        <div>
            <div className='mt-20 mx-28'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
                </Swiper>
            </div>

            <Marquee>
                <h3 className='mt-20 font-josefin text-4xl link'>UPTO 40% OFF FOR OUR EID-UL-FITR COLLECTION</h3>
            </Marquee>
        </div>
    );
};

export default Banner;