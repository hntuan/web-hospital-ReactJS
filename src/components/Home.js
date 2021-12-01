import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <section className="home" id="home">
                <div className="container">
                    <div className="row min-vh-100 align-items-center text-center text-md-left">
                        <div className="col-md-6 pr-md-5">
                            <img src="./img/home-img.svg" width="100%" />
                        </div>
                        <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
                            <h1>
                                <span>Stay</span> safe, <span>stay</span> healthy.
                            </h1>
                            <h3>Caring for you.</h3>
                            <a href="#">
                                <button className="button">Learn more</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Home;