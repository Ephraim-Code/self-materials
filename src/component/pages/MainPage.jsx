import React from 'react';
import { Component } from 'react';
import { FaAdobe, FaHiking, FaJava } from 'react-icons/fa';
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
                icon: <FaAdobe />,
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
                            <h2>{item.icon}</h2>
                            <h6>{item.name}</h6>
                            <p>{item.desc}</p>
                            <span className="free">{item.price}</span>
                        </article>
                    })}


                </div>

            </section>
        )
    }
}
export default MainPage;