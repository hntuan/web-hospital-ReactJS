import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        img: "./img/img2.png",
        time: "Nov 9, 2021",
        title: "Post title goes here",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        img: "./img/img4.png",
        time: "Nov 9, 2021",
        title: "Post title goes here",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        img: "./img/img5.png",
        time: "Nov 9, 2021",
        title: "Post title goes here",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
];

var post = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}

export default post;