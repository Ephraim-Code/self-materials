import React from 'react';
import ReactDOM from 'react-dom';
import './course.css';
import App from './App';
import CourseState from './course/context/CourseState';

ReactDOM.render(
  <CourseState> <App /></CourseState>, document.getElementById('root')
)