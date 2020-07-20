import React from 'react';
import InputGame from '../InputGame';
import LabelGame from '../LabelGame';
import './styles.css';

const handleClick = () => {
  console.log('Vamo que Vamo!!');
}

const InputCheckbox = ({id = "", value = "", content = ""}) => (
  <>
    <InputGame id={id} value={value} type="checkbox" content={content} />
    <LabelGame onClick={handleClick} htmlFor={id} content={content} />
  </>
)

export default InputCheckbox;