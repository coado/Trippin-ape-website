import styles from './Gap.module.scss';

export const Gap = () => {
    return (
        <div className={styles.gapWrapper}>
            <span className={styles.gap}></span>
            <span className={styles.gap}></span>
            <span className={styles.gap}></span>
        </div>
    )
}