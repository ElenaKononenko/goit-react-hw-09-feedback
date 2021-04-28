import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Feedback.module.css';

const Feedback = ({ options, onIncrement }) => {
  const nameButton = Object.keys(options);
  return (
    <div>
      {nameButton.map(button => (
        <Button
          key={button}
          className={s.button}
          type="button"
          name={button}
          variant="outline-warning"
          onClick={onIncrement}
        >
          {button}
        </Button>
      ))}
    </div>
  );
};
export default Feedback;
Feedback.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
