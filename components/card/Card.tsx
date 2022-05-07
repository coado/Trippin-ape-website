import styles from './Card.module.scss';

export const Card = ({ name, extension }: 
    {
        name: string, 
        extension: string
    }
    ) => {
    return (
        <div className={styles.card}>   
            <img src={`./images/${name}.${extension}`} alt={`${name}`} className={styles.cardImage} />
        </div>
    )
}

