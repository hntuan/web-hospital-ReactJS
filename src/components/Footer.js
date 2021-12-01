import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <a href="#" className="logo">
                                <span>H</span>ealth<span>C</span>are.
                            </a>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
                                repellat aut sequi Quisquam ad, a eum saepe soluta labore!
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h3>Links</h3>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#facility">Facility</a>
                            <a href="#review">Review</a>
                            <a href="#contact">Contact</a>
                            <a href="#post">Post</a>
                        </div>
                        <div className="col-md-4 text-center">
                            <h3>Share</h3>
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                            <a href="#">Github</a>
                        </div>
                    </div>
                </div>
                <h1 className="credit text-center mx-auto">
                    Created by <span>Mr. Web designer</span> | all rights reserved
                </h1>
            </section>
        );
    }
}

export default Footer;