import React, { Component, Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import CourseContext from '../context/CourseContext';
import ShowInfo from './ShowInfo';


const CourseIterm = ({ course }) => {

    const [isopen, setIsopen] = useState(false);
    const courseContext = useContext(CourseContext);
    const { deleteCourse, setCurrent, clearCurrent } = courseContext;
    const { id, name, price, instructor, icon, info, duration, img } = course;


    const deleteAcourse = () => {
        deleteCourse(id);
        clearCurrent();
    }

    return (
        <Fragment>
            <div className="course_container">
                <h2>{name}</h2>
                <p style={{ float: "right", marginRight: "10px", color: "green", fontSize: "20px" }}>{price}</p>
                <h4 style={{ fontSize: "30px" }}>{icon}</h4>
                <div>

                    <div>

                        <p className="showinfo">
                            <ShowInfo key={course.id} course={course.Info} />
                        </p>
                    </div>
                    <p className="instructor">{instructor}</p>
                    <span className="duration">{" "} {duration}</span>
                </div>
                <p className="imgInfo">
                    {img}
                </p>
                {/*  */}
                <div className="flex">
                    <Link to="/CourseForm">
                        <p className="danger" onClick={() => setCurrent(course)}>Edit</p>
                    </Link>
                    <p className="primary" onClick={deleteAcourse}>Delete</p>

                </div>
            </div>

        </Fragment>
    )
}

export default CourseIterm;