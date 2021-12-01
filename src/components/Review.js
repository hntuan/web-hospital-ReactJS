import React, { Component } from 'react';
import { connect } from "react-redux";

class Review extends Component {
    render() {
        var showReview = this.props.review.map((review, index) => {
            return (
                <div key={index} className="box">
                    <p>
                        {review.content}
                    </p>
                    <h3>{review.name}</h3>
                    <span>{review.time}</span>
                    <img src={review.img} />
                </div>
            )
        })
        return (
            <section className="review" id="review">
                <div className="container">
                    <h1 className="heading">
                        {" "}
                        <span>People's Review</span>
                    </h1>
                    <div className="box-container">
                        {showReview}
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        review: state.review,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Review);
