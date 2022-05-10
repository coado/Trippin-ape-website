import type { NextPage } from 'next'
import fs from 'fs';
import path from 'path';
import styles from './index.module.scss';
import Waves from '../public/svg/waves.svg';
import { Image } from '../components/Image/Image';
import { Gap } from '../components/Gap/Gap';

import { SocialMediaButtons } from '../components/SocialMediaButtons/SocialMediaButtons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import { Card } from '../components/card/Card';

import 'swiper/css';


const Home = ({ sneaks }:
    {
      sneaks: string[]
    }
  ) => {

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
                {
                  sneaks.map((image, i) => <SwiperSlide key={i} ><Card filename={image} /></SwiperSlide>)
                }
              </Swiper>
            </div>

            <div className={styles.collectionSmallDevice}>
                {
                  sneaks.map((image, i) => <SwiperSlide key={i} ><Card filename={image} /></SwiperSlide>)
                }
            </div>
           
             
         
        </section>

        <section className={styles.journalSection}>
            
            <div className={styles.sectionWrapper}>
              <div className={styles.textWrapper}>
                <h2>
                  Behold the first page of journal!
                </h2>
                <p>
                  We are in awe. Chorles has decided to share with us, his devoted disciples, the bounty of his wisdom. 
                </p>
              </div>

              <Image name='journal.png' alt='journal image' />
            </div>

        </section>

        <Gap />

        <section className={styles.ceremonySection}>
            
            <div className={`${styles.sectionWrapper} ${styles.reverse}`}>

                <Image name='ceremony.png' alt='ceremony image' />

                <div className={styles.textWrapper}>
                  <h2>
                    Ceremony
                  </h2>
                  <p>
                    The first ceremony is complete. Chorles’s Disciples have been initiated.
                  </p>
                </div>
                
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



export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('public/images'))

  const sneaks = files.filter(filename => filename.includes('sneak'))
  
  return {
    props: {
      sneaks
    }
  }
}