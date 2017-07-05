import React from 'react'
import {PhoneNumberField} from '../common/phoneNumberFields'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'

export default class PhoneComponent extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.checkPreferred = this.checkPreferred.bind(this)
    this.state = {
      phoneComponentValue: 0,
      phoneFieldList: [{
        ID : '',
        number: '',
        phone_type: {
          id: '',
          value: ''
        },
        is_preferred: false
      }],
      numPhoneCards: [0],
      'insert': true
    }
  }
  removeCard (value) {
    //this.state.phoneComponentValue -= 1 ;
    var totalCards = [];
    totalCards = totalCards.concat(this.state.numPhoneCards);
    if(this.state.phoneComponentValue > 0) {
      totalCards.pop();
      this.state.phoneComponentValue -= 1
    }
    this.setState({
      numPhoneCards : totalCards
    })
  }
  addCard (event) {
    this.setState({
      'insert': true
    })
    if (this.state.insert) {
      this.state.phoneComponentValue += 1;
      let totalCards = [];
      totalCards = totalCards.concat(this.state.numPhoneCards);
      totalCards.push(this.state.phoneComponentValue);
      let phoneList = this.state.phoneFieldList;
      phoneList.push({
        ID : '',
        number: '',
        phone_type: {
          id: '',
          value: ''
        },
        is_preferred: false
      })
      this.setState({
        numPhoneCards : totalCards,
        phoneFieldList : phoneList
      })
    }

  }
  checkPreferred (data) {
    var changedPhoneList = [];
    changedPhoneList = changedPhoneList.concat(this.state.phoneFieldList);
    for (var i = 0; i < changedPhoneList.length; i++ ) {
      if(data.phoneField.ID != changedPhoneList[i].ID) {
        changedPhoneList[i].is_preferred = false;
      }
    }
  }
  render () {
    var noOFPhoneCards = this.state.numPhoneCards;
    let phoneListToChild = this.state.phoneFieldList;
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
