import { csrfFetch } from "./csrf";
//create a beach
const CREATE_BEACH = 'beach/createBeach'
const LOAD_BEACHES = 'beach/loadBeaches'

//see all the beaches
const loadBeaches = (beaches) => ({
    type: LOAD_BEACHES,
    payload: beaches
});

//make a post for a beach
const createBeach = beach =>({
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
    // console.log("hello")
    const response = await csrfFetch(`/beaches/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
        const beach = await response.json();
        dispatch(createBeach(beach));
        return response

}


const initialState = []

const beachReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case LOAD_BEACHES:
            return action.payload
        default:
            return state;
    }
}

export default beachReducer;
