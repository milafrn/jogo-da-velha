import React from 'react';
import InputGame from '../InputGame';
import LabelGame from '../LabelGame';
import './styles.css';

const InputCheckbox = ({id = "", value = "", content = "", onClick }) => (
  <>
    <InputGame id={id} value={value} type="checkbox" content={content} />
    <LabelGame onClick={onClick} htmlFor={id} content={content} />
  </>
)

export default InputCheckbox;