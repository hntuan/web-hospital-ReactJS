import React, { Component } from 'react';
import { connect } from "react-redux";

class Counter extends Component {
    render() {
        var showCounter = this.props.counter.map((counter, index) => {
            return (
                <div key={index} className="box">
                    <i className={counter.icon} />
                    <span>{counter.number}+</span>
                    <h3>{counter.name}</h3>
                </div>
            )
        })
        return (
            <section className="counter" id="counter">
                <div className="container">
                    <div className="box-container">
                        {showCounter}
                    </div>
                </div>
            </section>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
