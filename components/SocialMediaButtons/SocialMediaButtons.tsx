import styles from './SocialMediaButtons.module.scss';
import Discord from '../../public/svg/discord.svg';
import Twitter from '../../public/svg/twitter.svg';

import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';



export const SocialMediaButtons = () => {

  const boxVariant = {
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        delay: 3
      } 
    },
    
    hidden: { 
      opacity: 0, 
      y: 50 
    },
  }



    return (
        <motion.div
          className={styles.socialMedia}
          variants={boxVariant}
          initial="hidden"
          animate="visible"
         >
            <a target='_blank' rel="noreferrer" href='https://twitter.com/TrippinApeNFT' className={styles.btn}>
              Twitter
              <Twitter className={styles.icon} />
            </a>    

            <a target='_blank' rel="noreferrer" href='https://discord.com/invite/trippinapetribe' className={styles.btn}>
              Discord
              <Discord className={styles.icon} />
            </a>
        </motion.div>
    )
}