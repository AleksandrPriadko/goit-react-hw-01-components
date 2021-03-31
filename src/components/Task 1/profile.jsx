import React from 'react';
import PropTypes from 'prop-types';
import './_profile.scss';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="Аватар пользователя" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li className="stats-items">
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li className="stats-items">
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li className="stats-items">
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;
