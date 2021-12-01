import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        name: "Someone's name",
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, voluptatem quas.',
        time:"Nov 9, 2021",
        img: "./img/pic-1.png"
    },
    {
        name: "Someone's name",
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, voluptatem quas.',
        time:"Nov 9, 2021",
        img: "./img/pic-2.png"
    },
    {
        name: "Someone's name",
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, voluptatem quas.',
        time:"Nov 9, 2021",
        img: "./img/pic-3.png"
    },
];

var review = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}

export default review;