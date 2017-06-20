import React from 'react';
import Cards from './cardsMain'
import PhoneComponent from './phoneNumberMain'
import './stylesheets/cards-main.scss'

export default class FormsRFA extends React.Component {
  render () {
    return (
      <div className="main_page">
        <div className='header_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='header-logo' />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h1 className="page-header">Resource Family Applications</h1>
        </div>
        <div className="cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Cards />
        </div>
        <div className="phone-section col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <PhoneComponent />
        </div>
      </div>
    )
  }
}