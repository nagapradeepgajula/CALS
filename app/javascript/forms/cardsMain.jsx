import React from 'react';
import NameCard from './name_card'
import PhoneComponent from './phoneNumber_card'


export default class Cards extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      formData: {
        first_name: null,
        last_name: null,
        name_suffix: null,
        gender: null,
        date_of_birth: null,
        ssn: null,
        languages: [],
        races: [],
      },
    }
    this.setField = this.setField.bind(this)
  }
  setField(fieldSeq, value) {
    const formData = this.state.formData.setIn(fieldSeq, value)
    this.setState({formData: formData})
  }
  submitForm() {
    console.log("Hello")
  }
  render () {
    const {formData} = this.state
    return (
      <div className="cards col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="cards-inner name-section col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <NameCard />
        </div>
        <div className="cards-inner phone-section col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <PhoneComponent />
        </div>
      </div>
    )
  }
}
