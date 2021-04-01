import React from 'react';
import PropTypes from 'prop-types';
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.boolean,
      avatar: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
