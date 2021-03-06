import React, { useContext } from 'react';
import CourseContext from '../context/CourseContext';
import { Link } from 'react-router-dom';
class ShowInfo extends React.Component {
    state = {
        isOpen: false
    }
    ShowInfo = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {

        const Info = this.props.course;

        return (
            <div>
                <p onClick={this.ShowInfo} className="read-more">
                    {this.state.isOpen ? "Read Less" : "Read More"}
                </p>
                {
                    this.state.isOpen ?
                        <p className="info-content">{Info}
                            <br />
                            <Link to='/Info/:id' >
                                <button>Details</button>

                            </Link>
                        </p> : null
                }
            </div>
        )
    }
}
export default ShowInfo;