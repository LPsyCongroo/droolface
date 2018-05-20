import React from 'react';
import axios from 'axios';

export default class PostNew extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      dietaryRestriction: '',
      description: '',
      isHomemade: false,
      restaurant: '',
      isPrivate: false
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
  handleHomemade = (isHomemade) => {
    this.setState({ isHomemade });
  }
  handleRestaurant = (restaurant) => {
    this.setState({ restaurant });
  }
  handlePrivate = (isPrivate) => {
    this.setState({ isPrivate });
  }

  handleSubmit = () => {
    const {title, dietaryRestriction, description, isHomemade, restaurant, isPrivate} = this.state;

    axios.post('/', { 
      title, 
      dietaryRestriction, 
      description, 
      isHomemade, 
      restaurant, 
      isPrivate 
    }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    this.props.history.push('/');
  }
  let photoSub = [
    {
      title: 'Best Shrimp Evahhh!!!',
      dietaryRestriction: ['#Pescatarian'],
      description: 'Shrimp Fried Rice',
      isHomemade: false,
      tags: ['#Spicy', '#Flavor', '#mmmmm']
      restaurant: 'Sage Tai Restaurant',
      ingredients: [],
      isPrivate: false,
      photo: 'shrimpy.jpg'
    },
    {
      title: 'So Juicy!',
      dietaryRestriction: ['#BringTheGrease'],
      description: 'Bacon Cheesburger',
      isHomemade: true,
      tags: ['#Ground Beef','#Mushrooms','#Onions','#BBQ Sauce']
      restaurant: '',
      isPrivate: false,
      photo: 'bareburger.jpg'
    },
    {
      title: 'Taco Tuesday!',
      dietaryRestriction: ['#Low Carb', '#Gluten Free', '#Keto'],
      description: 'Bacon Cheesburger',
      isHomemade: true,
      tags: ['#Eating Clean','#No Regrets']
      restaurant: '',
      isPrivate: false,
      photo: 'bareburger.jpg'
    }
  ]
  render(){
    const {title, dietaryRestriction, description, isHomemade, restaurant, isPrivate} = this.state;
    
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
            placeholder="Diet" 
            value={dietaryRestriction}
            onChange={e => this.handleDiet(e.target.value)}
          />            
          <input 
            type="text" 
            placeholder="Description" 
            value={description}
            onChange={e => this.handleDescription(e.target.value)}  
          />
          <input 
            type="checkbox" 
            placeholder="Homemade?" 
            value={isHomemade}
            onChange={e => this.handleHomemade(e.target.value)}
          />            
          <input 
            type="text" 
            placeholder="restaurant" 
            value={restaurant}
            onChange={e => this.handleRestaurant(e.target.value)}  
          />
          <input 
            type="checkbox" 
            placeholder="Private" 
            value={isPrivate}
            onChange={e => this.handlePrivate(e.target.value)}
          />  
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>   
      </div>
    )
  }
}