import React from 'react'
import AboutApplicant from '../../../app/javascript/forms/aboutApplicant_card.js'
var TestUtils = require('react-dom/lib/ReactTestUtils');
import {yesNo} from '../../../app/javascript/constants/constants'

describe('educationLevels', function () {
    const props = {
        educationLevels: {
            items: [
                {
                    "id": 1,
                    "value": "High School"
                },
                {
                    "id": 2,
                    "value": "GED"
                },
                {
                    "id": 3,
                    "value": "Some College"
                },
                {
                    "id": 4,
                    "value": "College - Bachelors"
                },
                {
                    "id": 5,
                    "value": "College - Masters"
                },
                {
                    "id": 6,
                    "value": "College - PhD"
                },
                {
                    "id": 7,
                    "value": "Medical School"
                }
            ]
        },
        genderTypes: {
            items: [
                {
                    "id": 1,
                    "value": "Male"
                },
                {
                    "id": 2,
                    "value": "Female"
                },
            ]
        },
        ethnicityTypes: {
            items: [
                {
                    "id": 1,
                    "value": "Asian"
                },
            ]
        },
        languageTypes: {
            items: [
                {
                    "id": 1,
                    "value": "English"
                },

            ]
        },
        stateTypes: {
            items: [
                {
                    "id": 1,
                    "value": "California"
                },
            ]
        }
    }
    const aboutApplicantCard = TestUtils.createRenderer()
    const cardRendered = aboutApplicantCard.render(<AboutApplicant {...props}/>)
    //debugger

    it('verify Resident Address fields', function () {
        let residenceClassName = cardRendered
        expect(residenceClassName.props.className).toBe('card-body')
    })
})
