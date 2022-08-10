export const TransactionHistory = ({items}) => {
    return (
        <TransactionHistory>
            <table class="transaction-history">
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
        </TransactionHistory>
    )
}