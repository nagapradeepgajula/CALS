import React from 'react';

const DropDownField = ({gridClassName, selectClassName, optionList,onChange, label}) => (
  <div className={gridClassName}>
    <label>{label}</label>
    <select defaultValue="" onChange={onChange} className={selectClassName}>
      {
        (Object.keys(optionList).sort()).map((item) => {
          return (
            <option key={Number(item)} value={item}>{optionList[item]}</option>
          )
        })
      }
    </select>
  </div>
)

export {DropDownField}