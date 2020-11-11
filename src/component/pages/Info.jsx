import React, { useContext } from 'react';
import CourseContext from "../../course/context/CourseContext";

const Info = () => {

    const courseContext = useContext(CourseContext);
    const { course } = courseContext;


    return (
        <div>
            <h2>{course.find(x => x.id === course.id)}</h2>
        </div>
    )

}
export default Info;