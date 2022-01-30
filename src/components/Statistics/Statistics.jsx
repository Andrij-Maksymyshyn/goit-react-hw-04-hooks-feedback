import React from 'react';
import PropTypes from 'prop-types';
import { MenuSecond, ItemSecond } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <MenuSecond>
    <ItemSecond>Good: {good}</ItemSecond>
    <ItemSecond>Neutral: {neutral}</ItemSecond>
    <ItemSecond>Bad: {bad}</ItemSecond>
    <ItemSecond>Total: {total}</ItemSecond>
    <ItemSecond>Positive feedback: {positivePercentage}%</ItemSecond>
  </MenuSecond>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
