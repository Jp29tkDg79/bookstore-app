import {InputHTMLAttributes} from 'react'

import classes from "./FormControl.module.css";

type FormControlProps = {
  id: string;
  inputEle: InputHTMLAttributes<HTMLInputElement>;
  text: string;
}

const FormControl = ({id, inputEle, text}: FormControlProps) => {
  return (
    <div className={classes.control}>
      <label htmlFor={id}>{text}</label>
      <input id={id} {...inputEle} />
    </div>
  )
}

export default FormControl