import React from 'react'
import AboutThisResidenceCard from '../../../app/javascript/forms/about_this_residence_card.js'
var TestUtils = require('react-dom/lib/ReactTestUtils');
import {yesNo} from '../../../app/javascript/constants/constants'

describe('Verify Physical Address', function () {
    const props = {
        languageTypes: {
            items : [
                {
                    "id": 1,
                    "value": "English"
                },
            ]
        },
        residenceTypes: {
            items : [
                {
                    "id": 1,
                    "value": "Own"
                },
            ]
        }
    }
    const aboutResidenceCard = TestUtils.createRenderer()
    const cardRendered = aboutResidenceCard.render(<AboutThisResidenceCard {...props}/>)
    //debugger

    it('verify Resident Address fields', function () {
        let residenceClassName = cardRendered
        expect(residenceClassName.props.className).toBe('card-body')
    })
})
