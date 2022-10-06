import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
import '../../../../node_modules/swiper/swiper-bundle.min.css';

// Import Swiper styles
// import 'swiper/css';
import SliderCard from './SliderCard/SliderCard';
import styles from './Slider.module.scss';

export default () => {
    return (
        <div className={styles.container}>
            <Swiper className={styles.slider}
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className={styles.slide}><SliderCard/></SwiperSlide>
                <SwiperSlide className={styles.slide}><SliderCard/></SwiperSlide>
                <SwiperSlide className={styles.slide}><SliderCard/></SwiperSlide>
                <SwiperSlide className={styles.slide}><SliderCard/></SwiperSlide>
                <SwiperSlide className={styles.slide}><SliderCard/></SwiperSlide>
                <SwiperSlide className={styles.slide}><SliderCard/></SwiperSlide>
                <SwiperSlide className={styles.slide}><SliderCard/></SwiperSlide>
                <SwiperSlide className={styles.slide}><SliderCard/></SwiperSlide>
                
                ...
            </Swiper>
        </div>

    );
};