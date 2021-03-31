import React from 'react';
import friendList from './friendList.module.scss';

console.log(friendList);

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, name, isOnline, avatar }) => {
      const colorsStat = isOnline ? friendList.statu : friendList.status;
      return (
        <li className={friendList.item} key={id}>
          <span className={colorsStat}></span>
          <img
            className={friendList.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{name}</p>
        </li>
      );
    })}
  </ul>
);

export default FriendList;
