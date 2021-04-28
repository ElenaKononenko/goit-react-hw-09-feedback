import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, countTotal, countPositive }) => {
  return (
    <ul className={s.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {countTotal}</li>
      <li>
        Positive feedback:
        {countPositive ? countPositive : 0}%
      </li>
    </ul>
  );
};
export default Statistic;
Statistic.propTypes = {
  countTotal: PropTypes.number.isRequired,
  countPositive: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
