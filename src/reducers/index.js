import { combineReducers } from "redux";
import about from './about';
import facility from './facility';
import review from './review';
import counter from './counter';
import post from './post';

const webReducers = combineReducers({ 
    about: about,
    facility: facility,
    review: review,
    counter: counter,
    post: post,
})

export default webReducers;