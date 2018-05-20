import React from 'react';
import { Link } from 'react-router-dom';

import Gallery from './Gallery';

export default () => (
  <div>
    <form method="post">
      <input type="text"/>
      <button type="submit">Search</button>
    </form>
    <Link to="/user/new">Sign Up</Link>
    <Link to="/post/new">Create Post</Link>
    <Gallery />
  </div>
)