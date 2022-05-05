import { csrfFetch } from "./csrf";
//create a beach
const LOAD_BEACHES = 'beach/loadBeaches'
const LOAD_ONE_BEACH = 'beach/loadOneBeach'
const CREATE_BEACH = 'beach/createBeach'

//action - see all the beaches
const loadBeaches = (beaches) => ({
    type: LOAD_BEACHES,
    payload: beaches
    //array of obj from db
});

//action -see one beach
const loadOneBeach = (oneBeach) => ({
    type: LOAD_ONE_BEACH,
    payload: oneBeach
})

//action -make a post for a beach
export const createBeach = (beach) =>({
        type: CREATE_BEACH,
        payload: beach
})

//thunk - get all beaches
export const getBeaches = () => async dispatch => {
    const response = await csrfFetch(`/beaches`);
        console.log("HELLO------- FROM getBEACHES thunk")
        const beaches = await response.json();
        dispatch(loadBeaches(beaches))
        return response;
};

//thunk - get one beach - NEED TO DEBUG
export const getOneBeach = (oneBeach) => async dispatch => {
    console.log("This is beach from getoneThunk", oneBeach)
    // console.log("--------are we getting into the fetch call from getOneBeach thunk?---------")
    const response = await csrfFetch(`/beaches/${oneBeach}`)

    if (response.ok) {
        const oneBeach = await response.json();
        // console.log("This is the beach from the fetch in src", beach)
        dispatch(loadOneBeach(oneBeach));
        return response;
    } else {
        return undefined
    }
}

//thunk - create a beach
export const createOneBeach = (payload) => async dispatch => {
    console.log("HEllO------ from createNewBeach")
    const response = await csrfFetch(`/beaches/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const beach = await response.json();
        dispatch(createBeach(beach));
        //return response doesn't require refresh
        return response
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
            // console.log("Load beaches payload", action.payload)
            return newState;
        case LOAD_ONE_BEACH:
            newState = {...state, beach: { [action.beach.id]: action.beach }}
            console.log("--LOAD_ONE_BEACH_PAYLOAD--", action.payload)
            // return action.payload
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
