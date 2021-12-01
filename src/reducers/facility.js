import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        imghref: "./img/img1.png",
        img: "./img/img1.png"
    },
    {
        imghref: "./img/img2.png",
        img: "./img/img2.png"
    },
    {
        imghref: "./img/img3.png",
        img: "./img/img3.png"
    },
    {
        imghref: "./img/img4.png",
        img: "./img/img4.png"
    },
    {
        imghref: "./img/img5.png",
        img: "./img/img5.png"
    },
    {
        imghref: "./img/img6.png",
        img: "./img/img6.png"
    },
    {
        imghref: "./img/img7.png",
        img: "./img/img7.png"
    },
    {
        imghref: "./img/img8.png",
        img: "./img/img8.png"
    },
    {
        imghref: "./img/img9.png",
        img: "./img/img9.png"
    },
];

var facility = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}

export default facility;