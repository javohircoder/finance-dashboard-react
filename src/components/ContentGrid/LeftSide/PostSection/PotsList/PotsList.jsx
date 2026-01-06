import PotsItem from '../PotsItem/PotsItem.jsx';
import styles from './PotsList.module.scss'

const pots = [
    {id: 1, name: 'Savings', amount: '$159', state: 'saving'},
    {id: 2, name: 'Gift', amount: '$40', state: 'gift'},
    {id: 3, name: 'Concert Ticket', amount: '$110', state: 'ticket'},
    {id: 4, name: 'New Laptop', amount: '$10', state: 'laptop'},
];

function PotsList() {
    return (
        <div className={styles.list}>
            {pots.map(item => (
                <PotsItem key={item.id} name={item.name} amount={item.amount} state={item.state}/>
            ))}
        </div>
    );
}

export default PotsList;
