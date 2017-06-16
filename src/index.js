import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from '../public/logo.png'
import find from '../public/find.png'
import contract from '../public/contract.png'
import growth from '../public/growth.png'
import $ from 'jquery'

function ComingSoon() {
  return (
    <div className="root-content">
      <div className="headingLogo">
        <img className="logo" src={logo} alt="logo"/>
        <h2>Freelance law has never been this easy. <br /> We need lawyers like you.</h2>
      </div>
      <Banner />
      <Waitlist />
    </div>
  );
}

class Banner extends React.Component {
  render() {
    return (
      <div className="row panel">
        <Info image={find} text="Find a simple and interesting task" />
        <Info image={contract} text="Lawyer it up for a little bit" />
        <Info image={growth} text="Build your experience and get $50+/hr" />
      </div>
    );
  }
}


class Waitlist extends React.Component {

  handleSubmit() {
    $.ajax({
       type: "POST",
       url: "/waitlist",
       data: JSON.stringify({'email': this.refs.email.value}),
       contentType: "application/json",
       crossDomain: true,
       dataType: "json",
       error: function (jqXHR, status) {
        console.log(jqXHR);
       }
    });
  }

  render() {
    return (
      <div className="waitlist">
        <h2>Sign up now and we’ll give you exclusive access to our first 100 clients.</h2> 
        <form onSubmit={() => this.handleSubmit()}>
          <input type="email" className="textbox" placeholder="Email" ref="email"/>
          <input type="submit" className="submit" value="Join waitlist"/>
        </form>
      </div>
    );
  }
}

function Info(props) {
  return (
    <div className="col-md-4 text-center col-centered">
      <div className="info-image">
        <img className="info" src={props.image} alt="search"/>
      </div>
      <div className="info-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}



ReactDOM.render(
  <ComingSoon />,
  document.getElementById('root')
);

