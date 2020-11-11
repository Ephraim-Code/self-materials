import React, { Component } from 'react';
import { FaCaretSquareDown, FaCopyright, FaFacebook, FaGithub, FaPhone, FaPhoneAlt } from 'react-icons/fa';
class Footer extends Component {

    state = {
        detailOpen: false
    }
    handelDetail = () => {
        this.setState({
            detailOpen: !this.state.detailOpen
        })
    }
    render() {


        return (
            <div className="footer" >
                <footer className="content_flex">
                    <p></p>
                    <div>
                        <div className="footer_details">
                            <div className="developer">
                                <img src="./images/Ephraim.jpg" alt="Developer" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                                <h5>Ephraim Momoh </h5>
                                {" "} <p className="more" onClick={this.handelDetail}>
                                    {this.state.detailOpen ? "Contacting" : "Contact"}
                                </p>
                            </div>
                        </div>
                        <div>
                            {this.state.detailOpen && (
                                <div className="developer_detail">

                                    <a href="https://github.com/Ephraim-Code/self-materials" target="_blank"> <FaGithub /> </a>
                                    <a href="https://github.com/Ephraim-Code/self-materials"> <FaFacebook /> </a>

                                </div>

                            )}

                        </div>

                    </div>

                </footer>
                <p><FaPhoneAlt />  +231-0888214521</p>
                <span>All Right Reserved <FaCopyright /> 2020 </span>

            </div>

        )
    }
}

export default Footer;