import React from 'react';

export default props => {
  const urls = [
    'https://images.pexels.com/photos/594969/pexels-photo-594969.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1085695/pexels-photo-1085695.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1081912/pexels-photo-1081912.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/594969/pexels-photo-594969.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1085695/pexels-photo-1085695.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1081912/pexels-photo-1081912.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/594969/pexels-photo-594969.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1085695/pexels-photo-1085695.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1081912/pexels-photo-1081912.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/594969/pexels-photo-594969.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1085695/pexels-photo-1085695.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1081912/pexels-photo-1081912.jpeg?auto=compress&cs=tinysrgb&h=350',
  ];

  const images = urls.map(url => <img src={url} />);

  return (
    <section>
      {images}
    </section>
  )
}