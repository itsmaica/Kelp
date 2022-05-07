import { csrfFetch } from "./csrf";
//create a beach
const LOAD_BEACHES = 'beaches/loadBeaches'
const LOAD_ONE_BEACH = 'beaches/loadOneBeach'
const CREATE_BEACH = 'beaches/createBeach'
const REMOVE_BEACH = 'beaches/removeBeach'

//action - see all the beaches
export const loadBeaches = (beaches) => ({
    type: LOAD_BEACHES,
    payload: beaches
    //array of obj from db
});

//action -see one beach
export const loadOneBeach = (oneBeach) => ({
    type: LOAD_ONE_BEACH,
    payload: oneBeach
})

//action -make a post for a beach
export const createBeach = (beach) =>({
        type: CREATE_BEACH,
        payload: beach
})

//action - delete a beach
export const removeBeach = (beachId) => ({
    type:REMOVE_BEACH,
    payload: beachId
})


//thunk - get all beaches
export const getBeaches = () => async dispatch => {
    const response = await csrfFetch(`/api/beaches`);
        const beaches = await response.json();
        dispatch(loadBeaches(beaches))
        return response;
};

//thunk - get one beach - NEED TO DEBUG
export const getOneBeach = (beachId) => async dispatch => {
    const response = await csrfFetch(`/api/beaches/${beachId}`)
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
    const response = await csrfFetch(`/api/beaches/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const beach = await response.json();
        dispatch(createBeach(beach));
        return response
    } else {
        return undefined;
    }
};

// delete thunk - destroy a beach
// export const destroyOneBeach = (beachId) = async dispatch => {
//     console.log("**<---HELLO FROM DELETE_THUNK--->**")
//     const response = await fetch(`/beaches/${beachId}`, {
//         method: 'delete'
//     })
//     if (response.ok) {
//         const { beachId } = await response.json();
//         dispatch(removeBeach(beachId));
//         return "Deleted beach"
//     }
// }

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
            return newState;
        case LOAD_ONE_BEACH:
            newState = {...state}
            newState.beach = action.payload
            // action.payload
            return newState;
        case CREATE_BEACH:
            newState = {...state.beaches, [action.payload.id]: action.payload}
            return newState;
        case REMOVE_BEACH:
            newState = {...state};
            delete newState[action.beachId];
            return newState
        default:
            return state;
    }
}

export default beachReducer;
