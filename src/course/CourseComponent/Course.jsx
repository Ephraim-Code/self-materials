import React, { useContext } from 'react';
import CourseContext from '../context/CourseContext';
import CourseIterm from './CourseIterms';
import { Link } from 'react-router-dom';


const Course = () => {

    const courseContext = useContext(CourseContext);
    const { course, addCourse } = courseContext;



    return (
        <div className="content">
            <Link to="/courseform">
                <button className="new-course">Add Course</button>
            </Link>
            {course.map(course => (
                <CourseIterm key={course.id} course={course} />
            ))}

        </div>
    )
}
export default Course;