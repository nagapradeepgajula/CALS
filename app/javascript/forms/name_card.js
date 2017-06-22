import React from 'react';
import {InputComponent} from '../common/inputFields';
import {DropDownField} from '../common/dropDownField';

export default class NameCard extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange (value) {
    var x = this;
    console.log(value)
  }
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
      <div className="card-body">
       <div className="row">
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
                          label={"This was for select Label"}/>
         </form>
       </div>
      </div>
    )
  }
}