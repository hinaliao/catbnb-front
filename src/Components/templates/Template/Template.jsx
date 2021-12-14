import React from 'react';
import PropTypes from 'prop-types';

const Template = ({ children }) => (
  <div className="template-container">
    <div className="template-content">
      {children}
    </div>
  </div>
);

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
