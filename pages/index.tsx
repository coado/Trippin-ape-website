import type { NextPage } from 'next'
import styles from './index.module.scss';
import Waves from '../public/svg/waves.svg';

import { SocialMediaButtons } from '../components/SocialMediaButtons/SocialMediaButtons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';

import 'swiper/css';

import { Card } from '../components/card/Card';

const Home: NextPage = () => {
  return (
    <>
        <header className={styles.header}>
            <h1 className={styles.hero}>
              Trippin Ape Tribe
            </h1>
            
            <h2 className={styles.description}>
              It is NOT a cult
            </h2>

            <SocialMediaButtons />
        </header>
      
        <section className={styles.collection}>

          <h2 className={styles.sneakPeaks}> Sneak peaks </h2>

            <div className={styles.swiperWrapper}>
              <Swiper
                  modules={[EffectCoverflow]}
                  spaceBetween={50}
                  slidesPerView={3}
                  effect='coverflow'
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                  }}
                  //  onSlideChange={() => console.log('slide change')}
                  //  onSwiper={(swiper) => console.log(swiper)}

                  className={styles.swiper}
              >
                <SwiperSlide><Card name='sneak1' extension='png' /></SwiperSlide>
                <SwiperSlide><Card name='sneak2' extension='png' /></SwiperSlide>
                <SwiperSlide><Card name='sneak3' extension='png' /></SwiperSlide>
                <SwiperSlide><Card name='sneak4' extension='png' /></SwiperSlide>
                <SwiperSlide><Card name='sneak5' extension='png' /></SwiperSlide>
                <SwiperSlide><Card name='sneak6' extension='png' /></SwiperSlide>
                <SwiperSlide><Card name='sneak7' extension='png' /></SwiperSlide>
                <SwiperSlide><Card name='sneak8' extension='png' /></SwiperSlide>
              </Swiper>
            </div>

            <div className={styles.collectionSmallDevice}>
              <Card name='sneak1' extension='png' />
              <Card name='sneak2' extension='png' />
              <Card name='sneak3' extension='png' />
              <Card name='sneak4' extension='png' />
              <Card name='sneak5' extension='png' />
              <Card name='sneak6' extension='png' />
              <Card name='sneak7' extension='png' />
              <Card name='sneak8' extension='png' />
            </div>
           
             
         
        </section>

        <footer className={styles.footer}>

            <div className={styles.footerWrapper}>
              <h1 className={styles.join}> Join the tribe NOW! </h1>
              <SocialMediaButtons />
            </div>

            <p className={styles.textFooter}>@2022</p>

            <Waves className={styles.waves} />
        </footer>
      </>
  )
}

export default Home
