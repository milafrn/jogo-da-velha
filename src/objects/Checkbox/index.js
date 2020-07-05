import React from 'react';
import InputCollab from '../InputCollab';
import Label from '../Label';
import './styles.css';


const Checkbox = ({id = "", value = "", content = ""}) => (
  <>
    <InputCollab id={id} value={value} type="checkbox" content={content} />
    <Label htmlFor={id} content={content} />
  </>
)

export default Checkbox;