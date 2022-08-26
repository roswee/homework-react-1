import user from "social-profile/user.json"
import Profile from "components/Profile/Profile"
import { Statistics } from "./Statistics/Stats";
import FriendList from "./FriendList/Friendlist";
import { TransactionHistory } from "./Transactions/Transactions";
import data from "statistics/data.json";
import transactions from "transaction-history/transactions.json"
import friends from "friend-list/friends.json";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexWrap: 'wrap',
      }}
    >

  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics title="Upload stats" stats={data} />

  <FriendList friends={friends} />

  <TransactionHistory items={transactions} />

    </div>
  );
};

