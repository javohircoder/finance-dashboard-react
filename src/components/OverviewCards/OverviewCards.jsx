import Card from "../Card/Card";
import styles from "./OverviewCards.module.scss";


function OverviewCards({cards}) {
    return (
        <section className={styles.wrapper}>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    label={card.label}
                    amount={card.amount}
                    variant={card.variant}/>
            ))}
        </section>
    );
}

export default OverviewCards;
