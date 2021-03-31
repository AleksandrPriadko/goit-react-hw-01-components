import React from 'react';
import PropTypes from 'prop-types';
import './statistics.scss';

const gen = '#' + Math.random().toString(16).substring(4);
console.log(gen);

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li
          className="item"
          key={id}
          //style={options.map(({ gen }) => (backgroundColor: gen))}
        >
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
