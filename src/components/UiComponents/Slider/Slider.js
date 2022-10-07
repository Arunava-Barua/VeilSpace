import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Navigation} from 'swiper';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
import '../../../../node_modules/swiper/swiper-bundle.min.css';
import cardData from '../../../data/SliderCardData/SliderCardData';

// Import Swiper styles
// import 'swiper/css';
import SliderCard from './SliderCard/SliderCard';
import styles from './Slider.module.scss';

export default () => {


    const slides = cardData.map((singleData)=>{
        return  <SwiperSlide className={styles.slide}><SliderCard url={singleData.img} name={singleData.name}/></SwiperSlide>
    });
    return (
        <div className={styles.container}>
            <Swiper className={styles.slider}
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
               {slides}
                ...
            </Swiper>
        </div>

    );
};