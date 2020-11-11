import React, { Component } from 'react'
import { FaFacebook, FaGithub, FaPhoneAlt } from "react-icons/fa";
class Developer extends Component {
    state = {
        isDeveloperOpen: false
    }
    handleDeveloperDetail = () => {
        this.setState({
            isDeveloperOpen: !this.state.isDeveloperOpen
        })
    }
    render() {
        return (
            <div>
                <img src="./images/Ephraim.jpg"
                    alt="Developer"
                    style={{
                        width: "35px", height:
                            "35px", borderRadius: "50%"
                    }}
                />
                <span className="small-span" style={{ fontSize: "8px", fontStyle: "italic" }}
                    onClick={this.handleDeveloperDetail}> {this.state.isDeveloperOpen ? "Ephraim Momoh Jr " : "Contact"}</span>
                {this.state.isDeveloperOpen && <div className="developer-info">
                    <a href="https://github.com/Ephraim-Code/self-materials"
                        target="_blank">
                        <FaGithub /> </a>
                    <a href="https://github.com/Ephraim-Code/self-materials"
                        target="_blank">
                        <FaFacebook />
                    </a>
                </div>}

            </div>
        )
    }
}
export default Developer;