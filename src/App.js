import React from 'react';
import './style.css';
import Category from './components/Category';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Category name="React HOC" />
    </div>
  );
}
