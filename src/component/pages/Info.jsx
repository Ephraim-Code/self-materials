import React, { useContext } from 'react';
import CourseContext from "../../course/context/CourseContext";

const Info = () => {

    const courseContext = useContext(CourseContext);
    const { course } = courseContext;

    return (
        <div>

        </div>
    )

}
export default Info;