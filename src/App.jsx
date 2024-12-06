import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <div style={{ marginTop: "30px" }}>
        <FriendList friends={friends} />
      </div>

      <div style={{ marginTop: "30px" }}>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

export default App;