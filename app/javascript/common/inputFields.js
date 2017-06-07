import React from 'react'


const InputComponent = ({gridClassName, labelClassName, id, label, onChange, value, placeholder, type}) => (
  <div className={gridClassName}>
    <label className={labelClassName} htmlFor={id}>{label}</label>
    <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
  </div>
)

export {InputComponent}