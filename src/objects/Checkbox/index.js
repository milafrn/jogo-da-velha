import React from 'react';
import InputCollab from '../InputCollab';
import LabelCollab from '../LabelCollab';
import './styles.css';


const Checkbox = ({id = "", value = "", content = ""}) => (
  <>
    <InputCollab id={id} value={value} type="checkbox" content={content} />
    <LabelCollab htmlFor={id} content={content} />
  </>
)

export default Checkbox;