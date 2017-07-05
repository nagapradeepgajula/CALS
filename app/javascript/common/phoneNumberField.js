import React from 'react'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'
import {CheckboxField} from './checkboxField'

export class PhoneNumberField extends React.Component {
  constructor (props) {
    super(props)
    this.clickClose = this.clickClose.bind(this)
    this.state = {
      isdiabled : false,
      phoneField: {
        ID : '',
        number: '',
        phone_type: {
          id: '',
          value: ''
        },
        is_preferred: false
      },
      phoneList : [],
      phoneTypes: {
        'items': this.props.props.phoneTypes.items
      }
    }
  }
  clickClose (id) {
    if (id == 0) {
      this.setState({
        phoneField: {
          ID: '',
          number: '',
          phone_type: {
            id: '',
            value: ''
          },
          is_preferred: false
        }
      })
    } else {
      this.props.removeCard(id)
    }
  }
  phoneChange (event, id) {
    if (event && id == 'phone_type') {
      var value = this.state.phoneTypes.items.filter(function (item) {
        return item.id == event
      })
    }
    if(id == 'is_preferred') {
      this.state.phoneField.ID = event.target.id
      event = event.target.value;
      event = (event === 'true');
      event = !event
    }
    this.state.phoneField[id] = value ? value[0] : event;
    //this.props.phoneChanged(this.state.phoneField);
    var newPhoneField = this.state.phoneField;
    var newPhoneList = this.state.phoneList;
    if(newPhoneField.is_preferred && newPhoneField.phone_type.value.length && (newPhoneField.number.length > 1)){
      newPhoneList.push(this.state.phoneField);
    }
    this.setState({
      phoneList : newPhoneList,
      phoneField: newPhoneField
    })
  }
  render () {
    let phoneTypes = this.state.phoneTypes;
    return (
      <div className='row list-item'>
        <span onClick={() => this.clickClose(this.props.id)} className='pull-right glyphicon glyphicon-remove' />
        <form>
          <InputComponent gridClassName='col-md-4' id='number' value={this.state.phoneField.number}
            label='Phone Number' placeholder='Enter Phone Number'
            type={'text'} onChange={(event, number) => this.phoneChange(event.target.value, ('number'))} />
          <DropDownField gridClassName='col-md-4' id='phone_type'
            selectClassName={'reusable-select'}
            optionList={phoneTypes.items} value={this.state.phoneField.phone_type.id}
            label={'Phone Type'} onChange={(event, id) => this.phoneChange(event.target.value, ('phone_type'))} />
          <CheckboxField gridClassName='col-md-4' id={'is_preferred'+'-' + this.props.id} type={'checkbox'}
            checked={this.state.phoneField.is_preferred}
            value={this.state.phoneField.is_preferred}
            label='Preferred Contact Number'
            onChange={(event, id) => this.phoneChange(event, ('is_preferred'))} />
        </form>
      </div>
    )
  }
}
