import React from 'React';
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'


export class PhoneNumberField extends React.Component {
  render () {
    return (
      <div>
        <form>
          <InputComponent gridClassName='col-md-4' id='firstname' 
                          label='First Name:' placeholder='Enter First Name' />
          <DropDownField gridClassName='col-md-4'
                         selectClassName={'reusable-select'}
                         optionList={"Hello"}
                         label={"This was for select Label"} />
        </form>
      </div>
    )
  }
}