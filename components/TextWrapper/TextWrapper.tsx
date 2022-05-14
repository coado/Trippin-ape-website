import styles from './TextWrapper.module.scss';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


export const TextWrapper = ({ header, text, reverse }: {header: string, text: string, reverse?: boolean}) => {

    const control = useAnimation()
    const [ref, inView] = useInView()
    const xTransition = reverse ? 40 : -40

    const boxVariant = {
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          type: 'spring',
          delay: 0.08
        } 
      },
      
      hidden: { 
        opacity: 0, 
        x: xTransition 
      },
    }

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } 
    }, [control, inView]);

    return (
        <motion.div
        className={styles.textWrapper}
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        >
      <h2>
        { header }
      </h2>
      <p>
        { text }
      </p>
    </motion.div>
    )
}