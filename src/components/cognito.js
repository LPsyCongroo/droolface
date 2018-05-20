import React from 'react';
import {CognitoAuth } from 'amazon-cognito-auth-js';

const clientId = '3utdo6191dab6nmt48954adl3i';
const userPoolId = 'us-east-2_0OPtPekr3';

const poolData = { userPoolId, clientId };

export default class UserNew extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current: 'register', //sign in, verify, welcome
      registerForm: {
        given_name: '',
        family_name: '',
        email: '',
        username: '',
        password: '',
        zip_code: ''
      },
      signInForm:{
        username: '',
        password: ''
      },
      username: '',
      verificationNumber: null,
    }
  }

  signIn = () => {
    const {username, password, email, given_name, family_name, zip_code} = this.state.initialForm;
    // validate
    this.setState({username});
    this.register(username, password, email, given_name, family_name, zip_code)
  }

  register = (username, password, email, given_name, family_name, zip_code) => {
    const userPool = new CognitoUserPool(poolData);

    const attributeList = [
      new CognitoUserAttribute({
        Name: 'given_name',
        Value: given_name
      }),
      new CognitoUserAttribute({
        Name: 'family_name',
        Value: family_name
      }),
      new CognitoUserAttribute({
        Name: 'zip_code',
        Value: zip_code
      }),
      new CognitoUserAttribute({
        Name: 'email',
        Value: email
      })
    ];

    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if(err){
        console.log(err.message);
        return;
      }
      const cognitoUser = result.user;
      console.log('user name is ' + cognitoUser.getUsername());
    })
  }

  verification = () => {
    const {username, verificationNumber} = this.state;
    this.verify(username, verificationNumber);
  }

  verify = (username, verificationNumber) => {
    const userPool = new CognitoUserPool(poolData);

    const userData = {
      Username: username,
      Pool: userPool
    }

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(verificationNumber, true, (err, result) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log(`call result: ${result}`);
    });
  }

  renderForm = () => {
    switch(this.state.current){
      case 'register':
        return (
          <form method="post">
            <input type="text" placeholder="first name"/>
            <input type="text" placeholder="last name"/>
            <input type="email" placeholder="email"/>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="zipcode"/>              
            <button type="submit">Submit</button>
          </form>
        );
      case 'verify':
        return (
          <form method="post">
            <input type="text" placeholder="verification number"/>              
            <button type="submit">Submit</button>
          </form>
        );
      case 'welcome':
        return (<div>Welcome!</div>);
      case 'sign in':
        return (
          <form method="post">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>            
          </form>
        )
    }
  }

  render(){
    return (
      <div>
        {this.renderForm()}
      </div>
    )
  }
}