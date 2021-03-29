import React from "react";
import user from "./user.json";
import Profile from "./components/Task 1/profile";
import Statistics from "./components/Task 2/Statistics";
import statisticalData from "./statistical-data.json";
import FriendList from "./components/Task 3/FriendList";
import friends from "./friends.json";

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
