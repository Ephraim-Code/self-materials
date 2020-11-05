import React, { useReducer } from 'react';
import CourseContext from './CourseContext';
import CourseReducer from './CourseReducer';

import {
    ADD_COURSE,
    DELETE_COURSE,
    SET_CURRENT_COURSE,
    CLEAR_CURRENT,
    UPDATE_COURSE
} from "../types";


const CourseState = props => {
    const initialState = {
        course: [
            {
                id: 1,
                name: "Computer Graphics",
                price: "$20.00",
                instructor: "Johnson Robert",
                Info: " Know how pixels are generated, and how they came about",
                duration: "2 months"


            },
            {
                id: 2,
                name: "Java programing",
                price: "$50.00",
                instructor: "Paul Thomas",
                Info: "Java is one of the most powerfull and popular programing Language in the world",
                duration: "6 months"


            },

        ],
        current: null
    };
    const [state, dispatch] = useReducer(CourseReducer, initialState);

    // Add course
    const addCourse = (course) => {
        dispatch({ type: ADD_COURSE, payload: course })
    }

    // Delete Course

    const deleteCourse = (id) => {
        dispatch({ type: DELETE_COURSE, payload: id })
    }
    const setCurrent = (course) => {
        dispatch({ type: SET_CURRENT_COURSE, payload: course })
    }
    const clearCurrent = () => {
        dispatch({
            type: CLEAR_CURRENT
        })
    }
    const updateCourse = (course) => {
        dispatch({ type: UPDATE_COURSE, payload: course })
    }

    return (
        <CourseContext.Provider value={{
            course: state.course,
            current: state.current,
            deleteCourse,
            addCourse,
            setCurrent,
            clearCurrent,
            updateCourse

        }}>
            {props.children}
        </CourseContext.Provider>
    )
};

export default CourseState;



