import React from 'react';
import Profile from '../components/profile/Profile';
import Statistics from '../components/statistics/Statistics';
import FriendList from '../components/friendList/FriendList';
import Transactions from '../components/transactions/Transactions';
import user from '../data/user';
import data from '../data/data-statistics';
import friends from '../data/friends';
import transactions from '../data/transactions';

const App = () => {
  return (
    <>
      <h1>React Homework</h1>
      <h2>Profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <h2>Statistics</h2>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <h2>Friend List</h2>
      <FriendList friends={friends}></FriendList>
      <h2>Transactions</h2>
      <Transactions items={transactions}></Transactions>
    </>
  );
};

export default App;
