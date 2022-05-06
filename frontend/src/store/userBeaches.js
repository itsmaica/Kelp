// import { getBeaches } from "./beaches";
import { csrfFetch } from "./csrf";


const GET_USER_BEACHES = 'userBeaches/getUserBeaches';
const DELETE_USER_BEACH = 'userBeaches/deleteUserBeach'
const UPADTE_USER_BEACH = 'userBeaches/updateUserBeach'

// const GET_ONE_USER_BEACH = 'userBeaches/getOneUserBeach';

// get all of one users beaches
const getUserBeaches = (userBeaches) => ({
    type: GET_USER_BEACHES,
    payload: userBeaches
})

//update a beach
const updateUserBeach = (beach) => ({
    type: UPADTE_USER_BEACH,
    // payload: updatedBeach
})


//delete a beach
const destroyUserBeach = (beach) => ({
    type: DELETE_USER_BEACH,
    payload: beach
})


//get one of a users beaches
// const getOneUserBeach = (oneUserBeach) => ({
//     type: GET_ONE_USER_BEACH,
//     payload: oneUserBeach
// })

//thunk to get all users beaches
export const populateUserBeaches = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/usersBeaches/${userId}/beaches`)

    const userBeaches = await response.json();
        dispatch(getUserBeaches(userBeaches))
        return response;
}


//update a user beach
export const changeOneUserBeach = (beachId, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/usersBeaches/${id}/beaches/${beachId}`, {
        method: 'PUT',
        headers: {"Content-Type" : "application/json"},
        // body: JSON.stringify(beach),
    })

    const updatedBeach = await response.json();
    dispatch(updateUserBeach(updatedBeach, id));
    return response
}


//delete a user beach
export const removeUserBeach = (beachId, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/usersBeaches/${id}/beaches/${beachId}`, {method: 'DELETE'});
        const beach = await response.json();
        dispatch(destroyUserBeach(beach));
        return response;
}

//thunk to get one user beach
// export const grabOneUserBeach = (beachId) => async (dispatch) => {
//     const response = await csrfFetch(`/api/usersBeaches/${id}/beaches/${beachId}`)

//     if (response.ok) {
//         const oneUserBeach = await response.json();
//         console.log("HELLO FROM GETONEUSER BEACH THUNK --->>", oneUserBeach)
//         dispatch(getOneUserBeach(oneUserBeach));
//         return response;
//     } else {
//         return undefined;
//     }
// }

const initialState = {}

const userBeachesReducer = ( state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_USER_BEACHES:
            newState = {...state}
            // console.log("New STATE REDUCER 51--->", newState)
            action.payload.Beaches.forEach(beach => newState[beach.id] = beach)
            return newState;
        case DELETE_USER_BEACH:
            newState = {...state}
            const id = action.payload.id
            delete newState[id]
            return newState;
        // case UPADTE_USER_BEACH:
        //     newState = {...state, [action.payload.id]: action.payload.updatedBeach},
        //     action.payload.Beaches
        default:
            return state;
    }
 }
// [ beach {b},{b},{b},{b} ]
// new state -> { setting key -> 6:{this a beach. the value of 6} }

export default userBeachesReducer;
