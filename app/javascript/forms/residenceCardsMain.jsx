import React from 'react';
import AddressMain from './address_card'

export default class ResidenceCards extends React.Component {
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
            <div className="residence_cards">
                <div className="card edit phone-section double-gap-top">
                    <div className="residence-header">
                        <span>Address</span>
                    </div>
                    <AddressMain />
                </div>
            </div>
        )
    }
}
