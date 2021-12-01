import React, { Component } from 'react';
import { connect } from "react-redux";

class Facility extends Component {
    render() {
        var showFacility = this.props.facility.map((facility, index) => {
            return (
                <div key={index} className="box">
                    <a href={facility.imghref} title="our team">
                        <img src={facility.img} />
                    </a>
                </div>
            )
        })
        return (
            <section className="facility" id="facility">
                <div className="container">
                    <h1 className="heading">
                        {" "}
                        <span>Facility</span>
                    </h1>
                    <div className="box-container pb-0">
                        {showFacility}
                    </div>
                </div>
            </section>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        facility: state.facility,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Facility);
