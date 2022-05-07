import styles from './SocialMediaButtons.module.scss';
import Discord from '../../public/svg/discord.svg';
import Twitter from '../../public/svg/twitter.svg';

export const SocialMediaButtons = () => {
    return (
        <div className={styles.socialMedia}>
            <a target='_blank' rel="noreferrer" href='https://twitter.com/TrippinApeNFT' className={styles.btn}>
              Twitter
              <Twitter className={styles.icon} />
            </a>    

            <a target='_blank' rel="noreferrer" href='https://discord.com/invite/trippinapetribe' className={styles.btn}>
              Discord
              <Discord className={styles.icon} />
            </a>
        </div>
    )
}