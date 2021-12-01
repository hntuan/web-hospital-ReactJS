import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        icon: 'fas fa-ambulance',
        name: 'ambulance services',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, voluptatem quas.',
    },
    {
        icon: 'fas fa-procedures',
        name: 'emergency rooms',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, voluptatem quas.',
    },
    {
        icon: 'fas fa-stethoscope',
        name: 'free check-ups',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, voluptatem quas.',
    },
];

var about = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}

export default about;