import React from 'react';

const DropDownField = ({gridClassName, selectClassName, optionList, label}) => (
  <div className={gridClassName}>
    <label>{label}</label>
    <select defaultValue="" className={selectClassName}>
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