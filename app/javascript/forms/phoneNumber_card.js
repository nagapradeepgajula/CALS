import React from 'react'
import {PhoneNumberField} from '../common/phoneNumberField'
import {InputComponent} from '../common/inputFields';
import {DropDownField} from '../common/dropDownField';

export default class PhoneComponent extends React.Component {
	render () {
		return (
			<div className="card-body">
        <PhoneNumberField  />
      </div>
		)
	}
}