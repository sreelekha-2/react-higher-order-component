import React from 'react';
import WithCategory from './WithCategory';
function Category(props) {
  return (
    <div>
      <p>{props.name}</p>
      <h2>This is Category Component</h2>
    </div>
  );
}
export default WithCategory(Category);
