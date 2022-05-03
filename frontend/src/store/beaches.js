import { csrfFetch } from "./csrf";
//create a beach
const CREATE_BEACH = 'beach/CREATE_BEACH'
const LOAD_BEACHES = 'beach/LOAD_BEACHES'

//see all the beaches
export const loadBeaches = beaches => ({
    type: LOAD_BEACHES,
    beaches
});

//make a post for a beach
export const createBeach = beach =>({
        type: CREATE_BEACH,
        beach
})

export const getBeaches = () => async dispatch => {
    const response = await fetch(`/api/beaches`);

    if (response.ok) {
        const beaches = await response.json();
        dispatch(loadBeaches(beaches))
    }
};

//thunk for creating a beach
export const createOneBeach = (payload) => async dispatch => {
    // console.log("hello")
    const response = await csrfFetch(`/api/beaches`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const beach = await response.json();
        dispatch(createBeach(beach));
        return beach
    } else {
        return undefined
    }
}

const beachReducer = ( state = {}, action ) => {
    switch(action.type) {
        case LOAD_BEACHES:
            return {
             ...state,
             entries: [...action.beaches]
            }
        case CREATE_BEACH:
            console.log(action.beach);
            return{
                ...state,
                [action.beach.id]: action.beach
            }
        default:
            return state;
    }

}

export default beachReducer;
