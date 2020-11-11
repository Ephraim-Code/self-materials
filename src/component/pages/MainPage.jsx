import React from 'react';
import { Component } from 'react';
import { FaAdobe, FaHiking, FaJava } from 'react-icons/fa';
import { FcReading } from 'react-icons/fc';
import SmallBanner from './SmallBanner';
import { Link } from "react-router-dom";

import loading from '../../course/loading-arrow.gif'
import FreeCourse from './FreeCourse';
import Repo from './Repo';

class MainPage extends Component {
    state = {
        isLoading: false,
        freeCourse: [
            {
                id: 1,
                name: "Human Relation",
                price: "free",
                icon: <FaHiking />,
                desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin ",

            },
            {
                id: 2,
                name: "Critical Thinking",
                price: "free",
                icon: <FcReading />,
                desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin",

            },
            {
                id: 3,
                name: "Java programing",
                price: "free",
                icon: <FaJava />,
                desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin"
            },
        ]
    }
    render() {

        return (
            <section className="services">
                <Repo />
                <FreeCourse title="Free Courses " />
                <div className="services-center">
                    {this.state.freeCourse.map((item, index) => {
                        return <article className="services" key={index}>
                            <h1 style={{ fontSize: "4rem" }}>{item.icon}</h1>
                            <Link to={'/Info/' + item.id}>
                                <h6>{item.name}</h6>
                            </Link>
                            <p>{item.desc}</p>
                            <Link to={'/Info' + item.id}>
                                <span className="free" style={{ textDecoration: "none" }}>{item.price}</span>
                            </Link>
                        </article>
                    })}


                </div>

            </section>
        )
    }
}
export default MainPage;