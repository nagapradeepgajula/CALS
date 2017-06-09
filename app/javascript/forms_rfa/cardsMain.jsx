import React from 'react';
import {InputComponent} from '../common/inputFields';
import {DropDownField} from '../common/dropDownField';


const nameTypes = {
  '01': 'Alias',
  '02': 'Legal Name',
  '03': 'Maiden Name',
  '04': 'Preferred Name',
  '05': 'other',
  '05': '[List to be identified]'
}
export default class CardsMain extends React.Component {
  render () {
    return (
      <div className="cards-inner">
        <InputComponent gridClassName='col-md-4' id='firstname' label='First Name:' placeholder='Enter First Name'/>
        <InputComponent gridClassName='col-md-4' id='lastName' label='Last Name:' placeholder='Enter Last Name'/>
        <InputComponent gridClassName='col-md-4' id='middleName' label='Middle Name:' placeholder='Enter Middle Name'/>
        <DropDownField gridClassName='col-md-4'
                       selectClassName={'reusable-select'}
                       optionList={nameTypes}
                       label={"This was for select Label"}/>
      </div>
    )
  }
}