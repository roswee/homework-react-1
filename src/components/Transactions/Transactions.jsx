import styles from "./Transactions.module.css"

const {transaction, transaction__head, transaction__body, transaction__row} = styles

export const TransactionHistory = ({items}) => {
    return (
        <div>
            <table className={transaction}>
                <thead className={transaction__head}>
                    <tr className={transaction__row}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>
                <tbody className={transaction__body}>
                    {items.map(item => (
                        <tr className={transaction__row}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}