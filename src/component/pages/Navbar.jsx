import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseContext from '../../course/context/CourseContext';


const Navbar = () => {
    const courseContext = useContext(CourseContext);
    const { course } = courseContext;

    return (
        <nav>
            <Link to="/">
                <p style={{ cursor: "pointer" }}> Ephraim Courses</p>
            </Link>

            <ul className="nav-links">
                <li>
                    <Link to="/" className="home  active">Home</Link>
                </li>
                <li>
                    <Link to="/home" className="color_content active  notification" >
                        <span className="badge">
                            {course.length}
                        </span>Course

                    </Link>
                </li>
                <li>
                    <Link to="/about" className="color_content active">About</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;