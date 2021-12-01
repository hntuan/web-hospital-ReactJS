import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <a href="#" className="logo">
                        <span>H</span>ealth<span>C</span>are.
                    </a>
                    <nav className="nav">
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#facility">Facility</a>
                            </li>
                            <li>
                                <a href="#review">Review</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <li>
                                <a href="#post">Post</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="fas fa-bars" />
                </div>
            </header>
        );
    }
}

export default Header;