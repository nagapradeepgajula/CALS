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
    fetch('/facilities/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-Token': this.getCsrfToken('csrf-token'),
        'X-CSRF-param': this.getCsrfToken('csrf-param')
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        params
      })
    })
    .then(
      response => response.json())
    .then((response) => {
      return this.setState({
        searchData: response.facilities
      })
    })
    .catch(error => {
      console.log(error)
      return this.setState({
        searchData: [],
        fromResponse: true
      })
    })
  }
  render () {
    const {formData} = this.state
    return (
      <div className="cards-inner col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <form onSubmit={this.submitForm.bind(this)}>
          <InputComponent gridClassName='col-md-4' id='firstname'
                          label='First Name:' placeholder='Enter First Name'
                          value={formData.first_name || ''}
                          onChange={(event) => this.setField(['first_name'], event.target.value)} />
          <InputComponent gridClassName='col-md-4' id='middleName'
                          label='Middle Name:' placeholder='Enter Middle Name'
                          value={formData.middle_name || ''}
                          onChange={(event) => this.setField(['middle_name'], event.target.value)}/>
          <InputComponent gridClassName='col-md-4' id='lastName'
                          label='Last Name:' placeholder='Enter Last Name'
                          value={formData.last_name|| ''}
                          onChange={(event) => this.setField(['last_name'], event.target.value)}/>
          <DropDownField gridClassName='col-md-4'
                         selectClassName={'reusable-select'}
                         optionList={nameTypes}
                         label={"This was for select Label"}/>
          <div className='card_submit col-md-12'>
              <button id='save_progress' type='submit' className='search-icon'>Save Progress</button>
          </div>
        </form>
      </div>
    )
  }
}
