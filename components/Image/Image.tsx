import styles from './Image.module.scss';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const Image = ({ name, alt }: { name: string, alt: string }) => {

    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant = {
      visible: { 
        opacity: 1, 
        transition: {
          type: 'spring',
          delay: 0.08
        } 
      },
      
      hidden: { 
        opacity: 0, 
      },
    }

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } 
    }, [control, inView]);

    return (
        <motion.div
            className={styles.imageWrapper}
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}    
        >
            <img src={`./images/${name}`} alt={alt} />
        </motion.div>
    )
}