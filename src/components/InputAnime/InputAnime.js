import React from 'react';
import classes from './InputAnime.module.css'

function InputAnime(props) {
  return (
    <div className={classes.wrap}>
      <div className={classes.InputAnime}>
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className={classes.labelName}>
          <span className={classes.labelContent}>Name</span>
        </label>
      </div>
    </div>
  )
}
 
export default InputAnime