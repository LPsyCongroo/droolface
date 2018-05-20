import React from 'react';

export default class PostNew extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      dietaryRestriction: '',
      description: '',
      isHomemade: false,
      restaurant: '',
    }
  }
  
  handleTitle = (title) => {
    this.setState({ title });
  }
  handleDiet = (dietaryRestriction) => {
    this.setState({ dietaryRestriction });
  }
  handleDescription = (description) => {
    this.setState({ description });
  }

  render(){
    return (
      <div>
        <form method="post">
          <input 
            type="text" 
            placeholder="Title" 
            value={title}
            onChange={e => this.handleTitle(e.target.value)}  
          />
          <input 
            type="text" 
            placeholder="diet" 
            value={dietaryRestriction}
            onChange={e => this.handleDiet(e.target.value)}
          />              
          <button type="submit" onClick={this.handleVerify}>Submit</button>
        </form>   
      </div>
    )
  }
}