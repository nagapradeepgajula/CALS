import React from 'react'
import {PhoneNumberField} from '../common/phoneNumberField'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'

export default class PhoneComponent extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.phoneFieldChanged = this.phoneFieldChanged.bind(this)
    this.state = {
      phoneFieldList: [],
      noPhoneCards: [0],
      'insert': true,
      phoneComponentValue: 1
    }
  }
  removeCard (value) {
    //this.state.phoneComponentValue -= 1 ;
    var totalCards = [];
    var totalCards = totalCards.concat(this.state.noPhoneCards);
    if(this.state.phoneComponentValue > 0) {
      totalCards.pop();
      this.state.phoneComponentValue -= 1
    }
    this.setState({
      noPhoneCards : totalCards
    })
  }
  phoneFieldChanged (data) {
    var addedPhone = data;
    var finalPhoneList = this.state.phoneFieldList;
    if(addedPhone.is_preferred && addedPhone.phone_type.value.length && (addedPhone.number.length > 1)){
      finalPhoneList.push(addedPhone);
      var newPhoneComponents = this.state.phoneComponents
      this.setState({
        phoneComponents : phoneComponents
      })
    }
    this.setState({
      phoneFieldList : finalPhoneList
    })
  }
  addCard (event) {
    this.setState({
      'insert': true
    })
    if (this.state.insert) {
      this.state.phoneComponentValue += 1;
      var totalCards = [];
      var totalCards = totalCards.concat(this.state.noPhoneCards);
      totalCards.push(this.state.phoneComponentValue)
      this.setState({
        noPhoneCards : totalCards
      })
    }

  }
  render () {
    var noOFPhoneCards = this.state.noPhoneCards;
    return (
      <div className='card-body'>
        {
          noOFPhoneCards.map((i) => {
            return <PhoneNumberField key={i} id={i} {...this}/>
          })
        }
        <div className='text-center'>
          <button onClick={this.addCard} className='btn btn-default'>Add another Number +</button>
        </div>
      </div>
    )
  }
}
