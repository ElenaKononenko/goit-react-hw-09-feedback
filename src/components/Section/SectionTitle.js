import React from 'react';
import PropTypes from 'prop-types';
const SectionTitle = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export default SectionTitle;
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
