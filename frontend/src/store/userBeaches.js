// import { getBeaches } from "./beaches";
import { csrfFetch } from "./csrf";


const GET_USER_BEACHES = 'userBeaches/getUserBeaches';
const DELETE_USER_BEACH = 'useBeaches/deleteUserBeach'
// const GET_ONE_USER_BEACH = 'userBeaches/getOneUserBeach';

// get all of one users beaches
const getUserBeaches = (userBeaches) => ({
    type: GET_USER_BEACHES,
    payload: userBeaches
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
        console.log("USER_BEACHES THUNK-------", userBeaches);
        dispatch(getUserBeaches(userBeaches))
        return response;
}

//delete a user beach
export const removeUserBeach = (beachId, id) => async (dispatch) => {
    console.log(`/api/usersBeaches/${id}/beaches/${beachId}`)
    const response = await csrfFetch(`/api/usersBeaches/${id}/beaches/${beachId}`, { method: 'DELETE'});
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
        default:
            return state;
    }
 }
// [ beach {b},{b},{b},{b} ]
// new state -> { setting key -> 6:{this a beach. the value of 6} }

export default userBeachesReducer;
