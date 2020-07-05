import React from 'react';
import './styles.css';

const LabelCollab = ({ htmlFor, content }) => (
  <label className="label-collab" htmlFor={htmlFor}>{content}</label>
);

export default LabelCollab