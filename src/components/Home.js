import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Link to="/user/new">Sign Up</Link>
    <Link to="/post/new">Create Post</Link>
  </div>
)