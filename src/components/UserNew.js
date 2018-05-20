import React from 'react';
import axios from 'axios';

import StyledInput from '../styled-components/styledinput'
import StyledButton from '../styled-components/styledbutton'

export default class UserNew extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current: 'register', //verify
      given_name: '',
      family_name: '',
      email: '',
      username: '',
      password: '',
      zip_code: '',
      verificationNumber: ''
    }
  }

  handleGiven = (given_name) => {
    this.setState({ given_name });
  }
  handleFamily = (family_name) => {
    this.setState({ family_name });
  }
  handleEmail = (email) => {
    this.setState({ email });
  }
  handleUsername = (username) => {
    this.setState({ username });
  }
  handlePassword = (password) => {
    this.setState({ password });
  }
  handleZip = (zip_code) => {
    this.setState({ zip_code });
  }
  handleVerification = (verificationNumber) => {
    this.setState({ verificationNumber });
  }

  users = [
    {
    username: 'rabbitface',
    password: 'duckduckgoosegoose',
    given_name: 'Nitya',
    family_name: 'Mandyam',
    email: 'duckgoose@gmail.com',
    zip_code: '11001',
    verificationNumber: 123456,
    profile_pic: 'nitya.jpg'
    }
  ]

  handleRegister = () => {
    const { given_name, family_name, email, username, password, zip_code } = this.state;
    
    axios.post('/user', {
      given_name,
      family_name,
      email,
      username,
      password,
      zip_code
    }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({current: 'verify'});
  }

  handleVerify = () => {
    const verificationNumber = this.state;

    axios.post('/', { verificationNumber })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    this.props.history.push('/');
  }

  render(){
    const { given_name, family_name, email, username, password, zip_code, verificationNumber } = this.state;

    return (
      <div>
        {
          this.state.current === 'register' 
            ? (
              <form method="post">
                <p><StyledInput  
                  type="text" 
                  placeholder="first name" 
                  value={given_name} 
                  onChange={e => this.handleGiven(e.target.value)}
                /></p>
                <p><StyledInput  
                  type="text" 
                  placeholder="last name" 
                  value={family_name}
                  onChange={e => this.handleFamily(e.target.value)}
                /></p>
                <StyledInput  
                  type="email" 
                  placeholder="email" 
                  value={email}
                  onChange={e => this.handleEmail(e.target.value)}
                />
                <p><StyledInput  
                  type="text" 
                  placeholder="username" 
                  value={username}
                  onChange={e => this.handleUsername(e.target.value)}  
                /></p>
                <p><StyledInput  
                  type="password" 
                  placeholder="password" 
                  value={password}
                  onChange={e => this.handlePassword(e.target.value)}
                /></p>
                <p><StyledInput  
                  type="text" 
                  placeholder="zipcode" 
                  value={zip_code}
                  onChange={e => this.handleZip(e.target.value)}
                />   </p>           
                <StyledButton type="submit" onClick={this.handleRegister}>Submit</StyledButton>
              </form>
            ) 
            : (
              <form method="post">
                <StyledInput  
                  type="text" 
                  placeholder="username" 
                  value={username}
                  onChange={e => this.handleUsername(e.target.value)}  
                />
                <StyledInput  
                  type="text" 
                  placeholder="verification code" 
                  value={verificationNumber}
                  onChange={e => this.handleVerification(e.target.value)}
                />              
                <StyledButton type="submit" onClick={this.handleVerify}>Submit</StyledButton>
              </form>              
            )
        }
      </div>
    )
  }
}