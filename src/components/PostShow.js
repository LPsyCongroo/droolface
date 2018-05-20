import React from 'react';
import {Link} from 'react-router-dom';

import { urls } from './DummyData';

export default class PostShow extends React.Component {
  componentDidMount(){

  }

  render(){
    return (
      <div>
        <Link to="/">Home</Link>
        <h2>Title</h2>
        <h3>Homemade/Restaurant</h3>
        <p>description</p>
        <img src={urls[this.props.match.params.id]}/>
        <div>Tags</div>
        <div>DroolPoints</div>
        <div>Share</div>
        <div>Map</div>
        <div>Recipe</div>
      </div>
    )
  }
}