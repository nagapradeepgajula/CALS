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
                <div>
                    <h3 className="text-left">Applicant (S) - Residence</h3></div>
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
                                   optionList={stateNames}
                                   label={"State"}/>
                    <div className='card_submit col-md-12'>
                        <button id='save_progress' type='submit' className='search-icon'>Save Progress</button>
                    </div>
                </form>
            </div>
        )
    }
}
