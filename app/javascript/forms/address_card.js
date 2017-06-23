import React from 'react';
import {InputComponent} from '../common/inputFields';
import {DropDownField} from '../common/dropDownField';



export default class ResidenceMain extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange (value) {
        var x = this;
        console.log(value)
    }
    render () {

        const stateNames = {
            "items": [
                {
                    "id": 1,
                    "value": "California"
                },
                {
                    "id": 2,
                    "value": "Colarado"
                }
            ]
        }
        return (
            <div className="cards-inner col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div>
                    <h3 className="text-left">Applicant (S) - Residence</h3></div>
                <div> <h4 className="text-left">Address</h4> </div>
                <form>
                    <InputComponent gridClassName='col-md-12' id='physicalAddress'
                                    label='Physical Address:' placeholder='Enter Physical Address'

                    />
                    <InputComponent gridClassName='col-md-4' id='zip'
                                    label='Zip Code:' placeholder='Ex:12345' />
                    <InputComponent gridClassName='col-md-4' id='lastName'
                                    label='City:' placeholder='Enter City' />
                    <DropDownField gridClassName='col-md-4'
                                   selectClassName={'reusable-select'}
                                   optionList={stateNames.items}
                                   label={"This was for select Label"}/>
                    <InputComponent gridClassName='col-md-4' id='lastName'
                                    label='Mailing address the same as Physical Address?' placeholder='' />

                    <div className="cards-inner col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div> <h4 className="text-left"> About This Residence </h4> </div>
                        <form>
                            <DropDownField gridClassName='col-md-12'
                                           selectClassName={'reusable-select'}
                                           optionList={stateNames.items}
                                           label={"Do you own, rent or lease the residence?"}/>
                            <br></br>
                            <DropDownField gridClassName='col-md-12'
                                           selectClassName={'reusable-select'}
                                           optionList={stateNames.items}
                                           label={"Weapons in home?"}/>
                            <DropDownField gridClassName='col-md-12'
                                           selectClassName={'reusable-select'}
                                           optionList={stateNames.items}
                                           label={"Body of Water?"}/>
                            <DropDownField gridClassName='col-md-12'
                                           selectClassName={'reusable-select'}
                                           optionList={stateNames.items}
                                           label={"Does any person not listed in this document use the residence as their mailing address?"}/>
                            <InputComponent gridClassName='col-md-12' id='directions'
                                            label='Please provide directions, including major cross-street information, to your residence.' placeholder='' />
                            <DropDownField gridClassName='col-md-12'
                                           selectClassName={'reusable-select'}
                                           optionList={stateNames.items}
                                           label={"Language(s) spoken in the home"}/>
                        </form>
                    </div>
                </form>
            </div>
        )
    }
}
