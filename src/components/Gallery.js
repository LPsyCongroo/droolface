import React from 'react';
import { Link } from 'react-router-dom';

import StyledGallery from '../styled-components/StyledGallery';
import { urls } from './DummyData';

export default props => {
  
  const images = urls.map((url, id) => (
    <Link to={`/post/${id}`}>
      <img src={url} />
    </Link>
  ));

  return (
    <StyledGallery>
      {images}
    </StyledGallery>
  )
}