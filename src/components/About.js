import React, { Component } from 'react';
import { connect } from "react-redux";

class About extends Component {
    render() {
        var showAbout = this.props.about.map((about, index) => {
            return (
                <div key={index} className="box">
                    <h3>
                        {" "}
                        <i className={about.icon} /> {about.name}{" "}
                    </h3>
                    <p>
                        {about.content}
                    </p>
                </div>
            )
        })
        return (
            <section className="about" id="about">
                <div className="container">
                    <div className="row min-vh-100 align-items-center">
                        <div className="col-md-6 content" data-aos="fade-right">

                            {showAbout}
                        </div>
                        <div className="col-md-6 d-none d-md-block" data-aos="fade-left">
                            <img src="./img/about-img.png" width="100%" />
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        about: state.about,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
