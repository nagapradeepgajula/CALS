import React from 'react'
import {PhoneNumberField} from '../common/phoneNumberField'
import {InputComponent} from '../common/inputFields';
import {DropDownField} from '../common/dropDownField';

export default class PhoneComponent extends React.Component {
  constructor(props) {
    super(props);
    this.removeCard = this.removeCard.bind(this);
  }
  removeCard() {

  }
	render () {
		return (
			<div className="card-body">
        <span onClick={this.removeCard} className="pull-right glyphicon glyphicon-remove"></span>
        <PhoneNumberField  />
        <div>
          <button className="btn btn-default btn-block">Add another Number +</button>
        </div>
      </div>
		)
	}
}