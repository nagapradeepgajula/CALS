// import React from 'react';
// import ReactDOM from 'react-dom';

// import { Router, Route, browserHistory } from 'react-router';

// import App from './App';
// import Facilities from './facilities_main.jsx';

// function hashLinkScroll() {
//   const { hash } = window.location;
//   if (hash !== '') {
//     // Push onto callback queue so it runs after the DOM is updated,
//     // this is required when navigating from a different page so that
//     // the element is rendered on the page before trying to getElementById.
//     setTimeout(() => {
//       const id = hash.replace('#', '');
//       const element = document.getElementById(id);
//       if (element) element.scrollIntoView();
//     }, 0);
//   }
// }


// ReactDOM.render(
//   <Router
//     onUpdate={hashLinkScroll}
//     history={browserHistory}>
//     <Route path="/facilities" component={App} />
//     <Route path="/facilities/:fac_nbr" component={Facilities} />
//   </Router>,
//   document.getElementById('root'),
// );


import  React, { Component } from 'react';
import FacilityList from './facility_list.jsx';

export default class Facility extends Component {

  constructor(props) {
    super(props);
    this.state = { items: JSON.parse(props.facilities) };
  }


  render() {
    const itemsList = this.state.items.map(item =>  <FacilityList key={item.fac_nbr} {...item}/>);
      return (
        <div className="block">
          {itemsList}
        </div>
      );
    }
}
