import React from 'react';

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
      <li class="item" key={friend.id}>
        <span class="status"></span>
        <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p class="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);

export default FriendList;
