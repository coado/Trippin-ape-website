import styles from './Image.module.scss';

export const Image = ({ name, alt }: { name: string, alt: string }) => {
    return (
        <div className={styles.imageWrapper}>
            <img src={`./images/${name}`} alt={alt} />
        </div>
    )
}