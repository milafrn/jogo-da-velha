import React from 'react';
import InputGame from '../InputGame';
import LabelCollab from '../LabelCollab';
import './styles.css';


const InputCheckbox = ({id = "", value = "", content = ""}) => (
  <>
    <InputGame id={id} value={value} type="checkbox" content={content} />
    <LabelCollab htmlFor={id} content={content} />
  </>
)

export default InputCheckbox;