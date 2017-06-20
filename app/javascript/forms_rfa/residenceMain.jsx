import React from 'react';
import {InputComponent} from '../common/inputFields';
import {DropDownField} from '../common/dropDownField';


const stateNames = {
    '01': 'California',
}
export default class ResidenceMain extends React.Component {


    render () {
        return (
            <div className="cards-inner col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form>
                    <InputComponent gridClassName='col-md-4' id='firstname'
                                    label='First Name:' placeholder='Enter First Name'

                    />
                    <InputComponent gridClassName='col-md-4' id='middleName'
                                    label='Middle Name:' placeholder='Enter Middle Name'
                                    onChange={(event) => this.setField(['middle_name'], event.target.value)}/>
                    <InputComponent gridClassName='col-md-4' id='lastName'
                                    label='Last Name:' placeholder='Enter Last Name'
                                    onChange={(event) => this.setField(['last_name'], event.target.value)}/>
                    <DropDownField gridClassName='col-md-4'
                                   selectClassName={'reusable-select'}
                                   optionList={stateNames}
                                   label={"This was for select Label"}/>
                    <div className='card_submit col-md-12'>
                        <button id='save_progress' type='submit' className='search-icon'>Save Progress</button>
                    </div>
                </form>
            </div>
        )
    }
}
