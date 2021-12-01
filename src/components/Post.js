import React, { Component } from 'react';
import { connect } from "react-redux";

class Post extends Component {
    render() {
        var showPost = this.props.post.map((post, index) => {
            return (
                <div key={index} className="box">
                    <img src={post.img} />
                    <div className="content">
                        <span>{post.time}</span>
                        <a href="#">
                            <h3>{post.title}</h3>
                        </a>
                        <p>{post.content} </p>
                        <a href="#">
                            <button className="button">Learn more</button>
                        </a>
                    </div>
                </div>
            )
        })
        return (
            <section className="post" id="post">
                <div className="container min-vh-100">
                    <h1 className="heading">
                        {" "}
                        <span>Post</span>
                    </h1>
                    <div className="box-container">
                        {showPost}
                    </div>
                </div>
            </section>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        post: state.post,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
