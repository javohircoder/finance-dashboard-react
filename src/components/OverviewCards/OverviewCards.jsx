function OverviewCards({ cards }) {
  return (
    <section key={cards} className="overview-cards">
      {cards.map((card) => (
        <div key={card.label} className={`card card--${card.variant}`}>
          <span className="card__label">{card.label}</span>
          <span className="card__amount">{card.amount}</span>
          <span></span>
        </div>
      ))}
    </section>
  );
}

export default OverviewCards;
