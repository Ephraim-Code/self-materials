import React, { useContext, useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CourseContext from '../context/CourseContext';
import Loading from './Loading';

const CourseForm = () => {
    const [course, setCourse] = useState({
        name: "",
        price: "",
        instructor: "",
        Info: "",
        duration: ""
    })
    const courseContext = useContext(CourseContext);

    const { addCourse, current, clearCurrent, updateCourse } = courseContext;

    const { name, price, instructor, Info, duration } = course;

    const onChange = e => {
        setCourse({ ...course, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (current !== null) {
            setCourse(current);
        } else {
            setCourse({
                name: "",
                price: "",
                instructor: "",
                Info: "",
                duration: ""
            })
        }
    }, [courseContext, current]);


    const SubmitCourse = (event) => {
        event.preventDefault();
        if (current === null) {
            addCourse(course)

        } else {
            updateCourse(course);
        }
        clearCurrent();
        setCourse({
            name: "",
            price: "",
            instructor: "",
            Info: "",
            duration: ""
        })

    }
    const clearAll = () => {
        clearCurrent();
    }
    return (
        <div className="form-content">
            <h3 className="icon-content">
                <FaUser />
            </h3>
            <span >{current ? "Updating..." : "Add More Course"}</span>
            <form onSubmit={SubmitCourse}>

                <input type='text'
                    name="name" value={name}
                    placeholder=" Name"
                    onChange={onChange}
                    required
                />
                <br />

                <input type='text'
                    name="price" value={price}
                    placeholder="Price"
                    onChange={onChange}
                    required

                />
                <br />

                <input type='text'
                    name="instructor"
                    value={instructor}
                    placeholder="Instructor"
                    onChange={onChange}
                    required

                />
                <input type='text'
                    name="duration" value={duration}
                    placeholder="Duration"
                    onChange={onChange}
                    required

                />

                <br />

                <textarea
                    type="text"
                    name="Info"
                    value={Info}
                    placeholder="Please write a piece of note about your course"
                    onChange={onChange}
                    required

                />
                <input type="submit" value={current ? "EDIT" : " CREATE COURSE"} className="submit" />
                {current && (
                    <p className="clear" onClick={clearAll} style={{ fontSize: "8px", borderRadius: "15px" }}>clear</p>
                )}

            </form>
        </div>

    )
}
export default CourseForm;