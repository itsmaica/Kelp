import { csrfFetch } from "./csrf";
//create a beach
const CREATE_BEACH = 'beach/createBeach'
const LOAD_BEACHES = 'beach/loadBeaches'

//see all the beaches
const loadBeaches = (beaches) => ({
    type: LOAD_BEACHES,
    payload: beaches
    //array of obj from db
});

//make a post for a beach
export const createBeach = (beach) =>({
        type: CREATE_BEACH,
        payload: beach
})

export const getBeaches = () => async dispatch => {
    const response = await csrfFetch(`/beaches`);
        const beaches = await response.json();
        dispatch(loadBeaches(beaches))
        return response
};

//thunk for creating a beach
export const createOneBeach = (payload) => async dispatch => {
    console.log("hello - beaches fetch")
    const response = await csrfFetch(`/beaches/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const beach = await response.json();
        dispatch(createBeach(beach));
        return beach
    } else {
        return undefined;
    }
};


const initialState = {}

const beachReducer = ( state = initialState, action ) => {
    let newState;
    switch(action.type) {
        case LOAD_BEACHES:
            //keep previous beaches if there
            newState = {...state}
            action.payload.forEach(beach => {
                newState[beach.id] = beach
            })
            console.log("Load beaches payload", action.payload)
            return newState;
        case CREATE_BEACH:
            newState = {...state.beaches, [action.beaches.id]: action.beach}
            return newState;
            // return action.payload
        default:
            return state;
    }
}

export default beachReducer;
