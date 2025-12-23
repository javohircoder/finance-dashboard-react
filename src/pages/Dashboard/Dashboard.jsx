import BillsSection from '../../components/BillsSection/BillsSection';
import BudgetsSection from '../../components/BudgetsSection/BudgetsSection';
import ContentGrid from '../../components/ContentGrid/ContentGrid';
import OverviewCards from '../../components/OverviewCards/OverviewCards';
import PostSection from '../../components/PostSection/PostSection';
import TransactionsSection from '../../components/TransactionsSection/TransactionsSection';

const overviewCards = [
    {
        label: 'Current Balance',
        amount: '$4,836.00',
        variant: 'dark',
    },
    {
        label: 'Income',
        amount: '$3,814.25',
        variant: 'light',
    },
    {
        label: 'Expenses',
        amount: '$1,700.50',
        variant: 'light',
    },
];

function Dashboard() {
    return (
        <>
            <header className="main-header">
                <h2 className="main-content__title">Overview</h2>
            </header>

            <OverviewCards cards={overviewCards}/>

            <ContentGrid
                left={
                    <>
                        <PostSection/>
                        <TransactionsSection/>
                    </>
                }
                right={
                    <>
                        <BudgetsSection/>
                        <BillsSection/>
                    </>
                }
            />

            <div className="content-grid">
                {/*  Left side*/}
                <div className="left-side">
                    {/*Section Post*/}
                    <section className="section post-section">
                        <div className="section__header">
                            <h4 className="section__title">Post</h4>
                            <a className="section__link" href="#">
                                See Details
                                <svg
                                    fill="none"
                                    height={11}
                                    viewBox="0 0 6 11"
                                    width={6}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.85375 0.146648L5.85375 5.14665C5.90024 5.19308 5.93712 5.24823 5.96228 5.30893C5.98744 5.36963 6.00039 5.43469 6.00039 5.5004C6.00039 5.56611 5.98744 5.63117 5.96228 5.69187C5.93712 5.75257 5.90024 5.80771 5.85375 5.85415L0.85375 10.8541C0.783823 10.9242 0.694696 10.9718 0.597654 10.9912C0.500611 11.0105 0.400016 11.0006 0.308605 10.9627C0.217193 10.9248 0.139075 10.8607 0.08414 10.7784C0.0292046 10.6961 -7.77313e-05 10.5993 1.33027e-07 10.5004L-3.04087e-07 0.500399C-7.81771e-05 0.40145 0.0292041 0.304704 0.0841395 0.222407C0.139075 0.14011 0.217193 0.075964 0.308604 0.0380878C0.400016 0.000211698 0.500611 -0.00969126 0.597653 0.00963399C0.694695 0.0289592 0.783822 0.076642 0.85375 0.146648Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="section__content">
                            <div className="pots">
                                <div className="pots__summary">
                                    <div className="pots__icon">
                                        <svg
                                            fill="none"
                                            height={35}
                                            viewBox="0 0 27 35"
                                            width={27}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21.875 5.075V2.1875C21.875 1.60734 21.6445 1.05094 21.2343 0.640704C20.8241 0.230468 20.2677 0 19.6875 0H7.1875C6.60734 0 6.05094 0.230468 5.6407 0.640704C5.23047 1.05094 5 1.60734 5 2.1875V5.075C3.60625 5.29946 2.33786 6.01255 1.42177 7.08665C0.505689 8.16076 0.00170468 9.52579 0 10.9375V28.4375C0 30.0122 0.625556 31.5224 1.73905 32.6359C2.85255 33.7494 4.36278 34.375 5.9375 34.375H20.9375C22.5122 34.375 24.0224 33.7494 25.1359 32.6359C26.2494 31.5224 26.875 30.0122 26.875 28.4375V10.9375C26.8733 9.52579 26.3693 8.16076 25.4532 7.08665C24.5371 6.01255 23.2687 5.29946 21.875 5.075ZM20 2.1875V5H16.875V1.875H19.6875C19.7704 1.875 19.8499 1.90792 19.9085 1.96653C19.9671 2.02513 20 2.10462 20 2.1875ZM11.875 5V1.875H15V5H11.875ZM7.1875 1.875H10V5H6.875V2.1875C6.875 2.10462 6.90792 2.02513 6.96653 1.96653C7.02513 1.90792 7.10462 1.875 7.1875 1.875ZM25 28.4375C25 28.971 24.8949 29.4993 24.6908 29.9922C24.4866 30.485 24.1874 30.9329 23.8101 31.3101C23.4329 31.6874 22.985 31.9866 22.4922 32.1908C21.9993 32.3949 21.471 32.5 20.9375 32.5H5.9375C5.40401 32.5 4.87573 32.3949 4.38285 32.1908C3.88996 31.9866 3.44212 31.6874 3.06488 31.3101C2.68764 30.9329 2.3884 30.485 2.18424 29.9922C1.98008 29.4993 1.875 28.971 1.875 28.4375V10.9375C1.875 9.86006 2.30301 8.82675 3.06488 8.06488C3.82675 7.30301 4.86006 6.875 5.9375 6.875H20.9375C22.0149 6.875 23.0483 7.30301 23.8101 8.06488C24.572 8.82675 25 9.86006 25 10.9375V28.4375ZM18.125 22.1875C18.125 23.0992 17.7628 23.9735 17.1182 24.6182C16.4735 25.2628 15.5992 25.625 14.6875 25.625H14.375V27.1875C14.375 27.4361 14.2762 27.6746 14.1004 27.8504C13.9246 28.0262 13.6861 28.125 13.4375 28.125C13.1889 28.125 12.9504 28.0262 12.7746 27.8504C12.5988 27.6746 12.5 27.4361 12.5 27.1875V25.625H10.9375C10.6889 25.625 10.4504 25.5262 10.2746 25.3504C10.0988 25.1746 10 24.9361 10 24.6875C10 24.4389 10.0988 24.2004 10.2746 24.0246C10.4504 23.8488 10.6889 23.75 10.9375 23.75H14.6875C15.1019 23.75 15.4993 23.5854 15.7924 23.2924C16.0854 22.9993 16.25 22.6019 16.25 22.1875C16.25 21.7731 16.0854 21.3757 15.7924 21.0826C15.4993 20.7896 15.1019 20.625 14.6875 20.625H12.1875C11.2758 20.625 10.4015 20.2628 9.75682 19.6182C9.11216 18.9735 8.75 18.0992 8.75 17.1875C8.75 16.2758 9.11216 15.4015 9.75682 14.7568C10.4015 14.1122 11.2758 13.75 12.1875 13.75H12.5V12.1875C12.5 11.9389 12.5988 11.7004 12.7746 11.5246C12.9504 11.3488 13.1889 11.25 13.4375 11.25C13.6861 11.25 13.9246 11.3488 14.1004 11.5246C14.2762 11.7004 14.375 11.9389 14.375 12.1875V13.75H15.9375C16.1861 13.75 16.4246 13.8488 16.6004 14.0246C16.7762 14.2004 16.875 14.4389 16.875 14.6875C16.875 14.9361 16.7762 15.1746 16.6004 15.3504C16.4246 15.5262 16.1861 15.625 15.9375 15.625H12.1875C11.7731 15.625 11.3757 15.7896 11.0826 16.0826C10.7896 16.3757 10.625 16.7731 10.625 17.1875C10.625 17.6019 10.7896 17.9993 11.0826 18.2924C11.3757 18.5854 11.7731 18.75 12.1875 18.75H14.6875C15.5992 18.75 16.4735 19.1122 17.1182 19.7568C17.7628 20.4015 18.125 21.2758 18.125 22.1875Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <div className="pots__total">
                                        <span className="pots__label">Total Saved</span>
                                        <span className="pots__amount">$850</span>
                                    </div>
                                </div>
                                <div className="pots__list">
                                    <div className="pots-item" data-state="saving">
                                        <span className="pots-item__name">Savings</span>
                                        <span className="pots-item__amount">$159</span>
                                    </div>
                                    <div className="pots-item" data-state="gift">
                                        <span className="pots-item__name">Gift</span>
                                        <span className="pots-item__amount">$40</span>
                                    </div>
                                    <div className="pots-item" data-state="ticket">
                                        <span className="pots-item__name">Concert Ticket</span>
                                        <span className="pots-item__amount">$110</span>
                                    </div>
                                    <div className="pots-item" data-state="laptop">
                                        <span className="pots-item__name">New Laptop</span>
                                        <span className="pots-item__amount">$10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section Transactions */}
                    <section className="section transactions-section">
                        <div className="section__header header-main">
                            <h3 className="section__title">Transactions</h3>
                            <a className="section__link" href="#">
                                View All
                                <svg
                                    fill="none"
                                    height={11}
                                    viewBox="0 0 6 11"
                                    width={6}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.85375 0.146648L5.85375 5.14665C5.90024 5.19308 5.93712 5.24823 5.96228 5.30893C5.98744 5.36963 6.00039 5.43469 6.00039 5.5004C6.00039 5.56611 5.98744 5.63117 5.96228 5.69187C5.93712 5.75257 5.90024 5.80771 5.85375 5.85415L0.85375 10.8541C0.783823 10.9242 0.694696 10.9718 0.597654 10.9912C0.500611 11.0105 0.400016 11.0006 0.308605 10.9627C0.217193 10.9248 0.139075 10.8607 0.08414 10.7784C0.0292046 10.6961 -7.77313e-05 10.5993 1.33027e-07 10.5004L-3.04087e-07 0.500399C-7.81771e-05 0.40145 0.0292041 0.304704 0.0841395 0.222407C0.139075 0.14011 0.217193 0.075964 0.308604 0.0380878C0.400016 0.000211698 0.500611 -0.00969126 0.597653 0.00963399C0.694695 0.0289592 0.783822 0.076642 0.85375 0.146648Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="section__content">
                            <div className="transactions">
                                <div className="transaction">
                                    <div className="transaction__info">
                                        <img
                                            alt="Emma Richardson"
                                            className="transaction__avatar"
                                            src="./public/images/Main/users/Person-1.png"
                                        />
                                        <span className="transaction__name">Emma Richardson</span>
                                    </div>
                                    <div className="transaction__details">
                    <span className="transaction__amount transaction__amount--positive">
                      +$75.50
                    </span>
                                        <span className="transaction__date">19 Aug 2024</span>
                                    </div>
                                </div>
                                <div className="transaction">
                                    <div className="transaction__info">
                                        <img
                                            alt="Savory Bites Bistro"
                                            className="transaction__avatar"
                                            src="./img/Main/users/Bread.png"
                                        />
                                        <span className="transaction__name">
                      Savory Bites Bistro
                    </span>
                                    </div>
                                    <div className="transaction__details">
                    <span className="transaction__amount transaction__amount--negative">
                      -$55.50
                    </span>
                                        <span className="transaction__date">19 Aug 2024</span>
                                    </div>
                                </div>
                                <div className="transaction">
                                    <div className="transaction__info">
                                        <img
                                            alt="Daniel Carter"
                                            className="transaction__avatar"
                                            src="./img/Main/users/Person-9.png"
                                        />
                                        <span className="transaction__name">Daniel Carter</span>
                                    </div>
                                    <div className="transaction__details">
                    <span className="transaction__amount transaction__amount--negative">
                      -$42.30
                    </span>
                                        <span className="transaction__date">18 Aug 2024</span>
                                    </div>
                                </div>
                                <div className="transaction">
                                    <div className="transaction__info">
                                        <img
                                            alt="Sun Park"
                                            className="transaction__avatar"
                                            src="./img/Main/users/Person-2.png"
                                        />
                                        <span className="transaction__name">Sun Park</span>
                                    </div>
                                    <div className="transaction__details">
                    <span className="transaction__amount transaction__amount--positive">
                      +$120.00
                    </span>
                                        <span className="transaction__date">17 Aug 2024</span>
                                    </div>
                                </div>
                                <div className="transaction">
                                    <div className="transaction__info">
                                        <img
                                            alt="Urban Services Hub"
                                            className="transaction__avatar"
                                            src="./img/Main/users/Logo-14.png"
                                        />
                                        <span className="transaction__name">
                      Urban Services Hub
                    </span>
                                    </div>
                                    <div className="transaction__details">
                    <span className="transaction__amount transaction__amount--negative">
                      -$65.00
                    </span>
                                        <span className="transaction__date">17 Aug 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* Right side*/}
                <div className="right-side">
                    {/* Section Budgets */}
                    <section className="section budgets-section">
                        <div className="section__header">
                            <h3 className="section__title">Budgets</h3>
                            <a className="section__link" href="#">
                                See Details
                                <svg
                                    fill="none"
                                    height={11}
                                    viewBox="0 0 6 11"
                                    width={6}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.85375 0.146648L5.85375 5.14665C5.90024 5.19308 5.93712 5.24823 5.96228 5.30893C5.98744 5.36963 6.00039 5.43469 6.00039 5.5004C6.00039 5.56611 5.98744 5.63117 5.96228 5.69187C5.93712 5.75257 5.90024 5.80771 5.85375 5.85415L0.85375 10.8541C0.783823 10.9242 0.694696 10.9718 0.597654 10.9912C0.500611 11.0105 0.400016 11.0006 0.308605 10.9627C0.217193 10.9248 0.139075 10.8607 0.08414 10.7784C0.0292046 10.6961 -7.77313e-05 10.5993 1.33027e-07 10.5004L-3.04087e-07 0.500399C-7.81771e-05 0.40145 0.0292041 0.304704 0.0841395 0.222407C0.139075 0.14011 0.217193 0.075964 0.308604 0.0380878C0.400016 0.000211698 0.500611 -0.00969126 0.597653 0.00963399C0.694695 0.0289592 0.783822 0.076642 0.85375 0.146648Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="section__content">
                            <div className="budgets">
                                <div className="budgets__chart">
                                    <div className="donut-chart">
                                        <svg
                                            className="donut-chart__svg"
                                            fill="none"
                                            height={240}
                                            viewBox="0 0 240 240"
                                            width={240}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M119.984 119.984L119.984 0C135.468 0 150.805 2.997 165.15 8.82566L119.984 119.984Z"
                                                fill="#277C78"
                                            />
                                            <path
                                                d="M119.984 119.984L165.15 8.82565C226.542 33.7702 256.087 103.759 231.143 165.15C206.198 226.541 136.209 256.087 74.8181 231.142C47.9302 220.217 25.9136 199.917 12.8474 174.001L119.984 119.984Z"
                                                fill="#82C9D7"
                                            />
                                            <path
                                                d="M119.984 119.984L12.8474 174.001C-6.20309 136.217 -3.94214 91.1917 18.7976 55.5058L119.984 119.984Z"
                                                fill="#F2CDAC"
                                            />
                                            <path
                                                d="M119.984 119.984L18.7976 55.5058C40.8288 20.932 78.9876 0 119.984 0V119.984Z"
                                                fill="#626070"
                                            />
                                        </svg>
                                        <div className="donut-chart__shape-head"/>
                                        <div className="donut-chart__shape"></div>
                                        <div className="donut-chart__center">
                                            <p className="donut-chart__amount">$338</p>
                                            <p className="donut-chart__label">of $975 limit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="budgets__list">
                                    <div className="budget-item">
                    <span
                        className="budget-item__color"
                        data-state="entertainment"
                    />
                                        <div className="budget-item__text">
                                            <span className="budget-item__name">Entertainment</span>
                                            <span className="budget-item__amount">$50.00</span>
                                        </div>
                                    </div>
                                    <div className="budget-item">
                                        <span className="budget-item__color" data-state="bills"/>
                                        <div className="budget-item__text">
                                            <span className="budget-item__name">Bills</span>
                                            <span className="budget-item__amount">$750.00</span>
                                        </div>
                                    </div>
                                    <div className="budget-item">
                                        <span className="budget-item__color" data-state="dining"/>
                                        <div className="budget-item__text">
                                            <span className="budget-item__name">Dining Out</span>
                                            <span className="budget-item__amount">$75.00</span>
                                        </div>
                                    </div>
                                    <div className="budget-item">
                    <span
                        className="budget-item__color"
                        data-state="personal"
                    />
                                        <div className="budget-item__text">
                                            <span className="budget-item__name">Personal</span>
                                            <span className="budget-item__amount">$75.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section Recurring Bills */}
                    <section className="section bills-section">
                        <div className="section__header">
                            <h3 className="section__title">Recurring Bills</h3>
                            <a className="section__link" href="#">
                                See Details
                                <svg
                                    fill="none"
                                    height={11}
                                    viewBox="0 0 6 11"
                                    width={6}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.85375 0.146648L5.85375 5.14665C5.90024 5.19308 5.93712 5.24823 5.96228 5.30893C5.98744 5.36963 6.00039 5.43469 6.00039 5.5004C6.00039 5.56611 5.98744 5.63117 5.96228 5.69187C5.93712 5.75257 5.90024 5.80771 5.85375 5.85415L0.85375 10.8541C0.783823 10.9242 0.694696 10.9718 0.597654 10.9912C0.500611 11.0105 0.400016 11.0006 0.308605 10.9627C0.217193 10.9248 0.139075 10.8607 0.08414 10.7784C0.0292046 10.6961 -7.77313e-05 10.5993 1.33027e-07 10.5004L-3.04087e-07 0.500399C-7.81771e-05 0.40145 0.0292041 0.304704 0.0841395 0.222407C0.139075 0.14011 0.217193 0.075964 0.308604 0.0380878C0.400016 0.000211698 0.500611 -0.00969126 0.597653 0.00963399C0.694695 0.0289592 0.783822 0.076642 0.85375 0.146648Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="section__content">
                            <div className="bills">
                                <div className="bill-item" data-state="paid">
                                    <span className="bill-item__label">Paid Bills</span>
                                    <span className="bill-item__amount">$190.00</span>
                                </div>
                                <div className="bill-item" data-state="total">
                                    <span className="bill-item__label">Total Upcoming</span>
                                    <span className="bill-item__amount">$194.98</span>
                                </div>
                                <div className="bill-item" data-state="due">
                                    <span className="bill-item__label">Due Soon</span>
                                    <span className="bill-item__amount">$59.98</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
