import React from 'react';
import { Link } from 'react-router-dom';

import Gallery from './Gallery';

export default () => (
  <div>
    <form method="post">
      <input type="text"/>
      <button type="submit">Search</button>
    </form>
    <p><Link to="/user/new">Sign Up</Link></p>
    <p><Link to="/post/new">Create Post</Link></p>
    <Gallery />
  </div>
)