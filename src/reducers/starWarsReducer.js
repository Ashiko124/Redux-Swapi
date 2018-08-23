import {FETCHING, FETCHED, ERROR} from '../actions';
const initialState = { people: [], fetching: false, error: null };
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: 
      return Object.assign({}, state, { fetching: true});
    case FETCHED:  
      //return Object.assign({}, state, { people: [...people, ...action.payload], fetching: false});
      return Object.assign({}, state, { people: [...state.people, ...action.payload], fetching: false});
    case ERROR: 
      return Object.assign({}, state, { fetching: false, error: "FAILED TO FETCH PEOPLE"});
    default:
      return state;
  }
};
