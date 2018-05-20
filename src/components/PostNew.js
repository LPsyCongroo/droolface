import React from 'react';
import axios from 'axios';


import StyledInput from '../styled-components/styledinput'
import StyledButton from '../styled-components/styledbutton'

export default class PostNew extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      dietaryRestriction: '',
      description: '',
      isHomemade: false,
      restaurant: '',
      isPrivate: false,
      pictures: []
    }
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
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
  
  render(){
    const {title, dietaryRestriction, description, isHomemade, restaurant, isPrivate} = this.state;
    
    return (
      <div>
        <form method="post">
          <StyledInput 
            type="text" 
            placeholder="Title" 
            value={title}
            onChange={e => this.handleTitle(e.target.value)}  
          /><br/>
          <StyledInput 
            type="text" 
            placeholder="Diet" 
            value={dietaryRestriction}
            onChange={e => this.handleDiet(e.target.value)}
          /><br/>       
          <StyledInput 
            type="text" 
            placeholder="Description" 
            value={description}
            onChange={e => this.handleDescription(e.target.value)}  
          /><br/>
          <label>Homemade? <StyledInput 
            type="checkbox" 
            value={isHomemade}
            onChange={e => this.handleHomemade(e.target.value)}
          /></label>            
          <StyledInput 
            type="text" 
            placeholder="restaurant" 
            value={restaurant}
            onChange={e => this.handleRestaurant(e.target.value)}  
          /><br/>
          <label>Private? <StyledInput 
            type="checkbox" 
            placeholder="Private" 
            value={isPrivate}
            onChange={e => this.handlePrivate(e.target.value)}
          /></label>
<<<<<<< HEAD
          <p>
          <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            </p>
          <StyledButton type="submit" onClick={this.handleSubmit}>Submit</StyledButton>
=======
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
>>>>>>> 74c64276f6d1608ea865e875b646b713958fd71c
        </form>   
      </div>
    )
  }
  photoSub = [
    {
      title: 'Best Shrimp Evahhh!!!',
      dietaryRestriction: ['#Pescatarian'],
      description: 'Shrimp Fried Rice',
      isHomemade: false,
      tags: ['#Spicy', '#Flavor', '#mmmmm'],
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
      tags: ['#Ground Beef','#Mushrooms','#Onions','#BBQ Sauce'],
      restaurant: '',
      isPrivate: false,
      photo: 'bareburger.jpg'
    },
    {
      title: 'Taco Tuesday!',
      dietaryRestriction: ['#Low Carb', '#Gluten Free', '#Keto'],
      description: 'Bacon Cheesburger',
      isHomemade: true,
      tags: ['#Eating Clean','#No Regrets'],
      restaurant: '',
      isPrivate: false,
      photo: 'taco_salad.jpg'
    }
  ]
}