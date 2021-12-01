import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        icon:"fas fa-hospital",
        number: "120",
        name: "Hospitals",
    },
    {
        icon:"fas fa-users",
        number: "100",
        name: "Staff",
    },
    {
        icon:"fas fa-smile",
        number: "1200",
        name: "Happy patients",
    },
    {
        icon:"fas fa-procedures",
        number: "130",
        name: "Bed facility",
    },
];

var counter = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}

export default counter;