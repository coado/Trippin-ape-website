import styles from './Card.module.scss';

export const Card = ({ filename }: 
    {
        filename: string
    }
    ) => {
    return (
        <div className={styles.card}>   
            <img src={`./images/${filename}`} alt={`${filename}`} className={styles.cardImage} />
        </div>
    )
}

