import React from 'react';
import PropTypes from 'prop-types';
import statistic from './statistics.module.scss';

const gen = '#' + Math.random().toString(16).substring(4);
console.log(gen);

const Statistics = ({ title, stats }) => (
  <section className={statistic.statistics}>
    <h2 className={statistic.title}>{title}</h2>
    <ul className={statistic.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li className={statistic.item} key={id}>
          <span className={statistic.label}>{label}</span>
          <span className={statistic.percentage}>{percentage}%</span>
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
