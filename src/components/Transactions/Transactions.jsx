import styles from "./Transactions.module.css"

const {transaction} = styles

export const TransactionHistory = ({items}) => {
    return (
        <div>
            <table className={transaction}>
                <thead>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currenct}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}