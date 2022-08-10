import { Profile } from "./Profile/user-profile";
import user from "./social-profile/user.json";

import { FriendList } from "./Profile/friend-list";
import { Statistics } from "./Profile/statistics";
import { TransactionHistory } from "./Profile/transaction";


import friends from "./friend-list/friends.json";
import data from "./statistics/data.json";
import transactions from "./transaction-history/transactions.json"


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Statistics title="Upload stats" stats={data} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <TransactionHistory items={transactions} />;
      Test1234
    </div>
  );
};
