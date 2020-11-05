import { ADD_COURSE, DELETE_COURSE, SET_CURRENT_COURSE, CLEAR_CURRENT, UPDATE_COURSE } from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_COURSE:
            return {
                ...state,
                course: [...state.course, action.payload]
            }
        case UPDATE_COURSE:
            return {
                ...state,
                course: state.course.map(course => course.id === action.payload.id ? action.payload : course)
            }
        case DELETE_COURSE:
            return {
                ...state,
                course: state.course.filter(course => course.id != action.payload)
            }
        case SET_CURRENT_COURSE:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }

        default:
            return state;
    }

}