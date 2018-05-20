import React from 'react';
import axios from 'axios';

import UserSidebar from './UserSidebar';
import Gallery from './Gallery';

export default class UserShow extends React.Component{
  constructor(props){
    super(props);
    this.state = { response: null }
  }

  componentDidMount(){
    const {id} = this.props.match.params;

    axios.get('/', {id})
      .then(response => {
        this.setState({response})
      })
      .catch(err => {
        console.log(err.message)
      });
  }

  render(){
    return (
      <div>
        <UserSidebar/>
        <Gallery/>
      </div>
    )
  }
}