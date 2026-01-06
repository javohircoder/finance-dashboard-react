import TransactionItem from '../TransactionItem/TransactionItem';
import styles from './TransactionsList.module.scss';

const transactions = [
    {
        id: 1,
        name: 'Emma Richardson',
        amount: '+$75.50',
        date: '19 Aug 2024',
        type: 'positive',
        avatar: '/images/Main/users/Person-1.png',
    },
    {
        id: 2,
        name: 'Savory Bites Bistro',
        amount: '-$55.50',
        date: '19 Aug 2024',
        type: 'negative',
        avatar: '/images/Main/users/Bread.png',
    },
    {
        id: 3,
        name: 'Daniel Carter',
        amount: '-$42.30',
        date: '18 Aug 2024',
        type: 'negative',
        avatar: '/images/Main/users/Person-9.png',
    },
    {
        id: 4,
        name: 'Sun Park',
        amount: '+$120.00',
        date: '17 Aug 2024',
        type: 'positive',
        avatar: '/images/Main/users/Person-2.png',
    },
    {
        id: 5,
        name: 'Urban Services Hub',
        amount: '-$65.00',
        date: '17 Aug 2024',
        type: 'negative',
        avatar: '/images/Main/users/Logo-14.png',
    },
];

function TransactionsList() {
    return (
        <div className={styles.list}>
            {transactions.map(item => (
                <TransactionItem key={item.id} {...item} />
            ))}
        </div>
    );
}

export default TransactionsList;
