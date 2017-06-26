import React from 'react';
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'


export class NameCardField extends React.Component {
  render () {
    const nameTypes = {
      "items": [
        {
          "id": 1,
          "value": "Alias"
        },
        {
          "id": 2,
          "value": "Legal"
        },
        {
          "id": 3,
          "value": "Maiden"
        },
        {
          "id": 4,
          "value": "Preferred"
        },
        {
          "id": 5,
          "value": "Other"
        }
      ]
    }
    return (
      <div className="row list-item">
        <span onClick={() => this.props.removeCard(this.props.id)} className="pull-right glyphicon glyphicon-remove"></span>
        <form>
          <InputComponent gridClassName='col-md-4' id='firstname' value={this.props.first_name}
                          label='First Name:' placeholder='Enter First Name'
                          type={'text'} onChange={(event) => this.onChange(event.target.value)} />
          <InputComponent gridClassName='col-md-4' id='middleName' value={this.props.middle_name}
                          label='Middle Name:' placeholder='Enter Middle Name' />
          <InputComponent gridClassName='col-md-4' id='lastName' value={this.props.last_name}
                          label='Last Name:' placeholder='Enter Last Name' />
          <DropDownField gridClassName='col-md-4'
                         selectClassName={'reusable-select'}
                         optionList={nameTypes.items}
                         label={"Name Type"}/>
        </form>
      </div>
    )
  }
}