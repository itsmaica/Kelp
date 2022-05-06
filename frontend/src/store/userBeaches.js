// import { getBeaches } from "./beaches";
import { csrfFetch } from "./csrf";


const GET_USER_BEACHES = 'userBeaches/getUserBeaches';
const GET_ONE_USER_BEACH = 'userBeaches/getOneUserBeach';

// get all of one users beaches
const getUserBeaches = (userBeaches) => ({
    type: GET_USER_BEACHES,
    payload: userBeaches
})

//get one of a users beaches
// const getOneUserBeach = (beachId) => ({
//     type: GET_ONE_USER_BEACH,
//     payload: userBeach
// })

//thunk to get all users beaches
export const populateUserBeaches = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/usersBeaches/${userId}/beaches`)

        const userBeaches = await response.json();
        dispatch(getUserBeaches(userBeaches))
        return response;
}

//thunk to get one user beach
// export const grabOneUserBeach = (beachId) = async (dispatch) => {
//     const response = await csrfFetch(`/api/usersBeaches/${useId}/beaches/${beachId}`)
//     if (response.ok) {
//         const oneUserBeach = await response.json();
//         dispatch(grabOneUserBeach(userB))
//     }
// }

const initialState = {}

const userBeachesReducer = ( state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_USER_BEACHES:
            newState = {...state}
            console.log("Action.payload --->", action.payload)
            action.payload.Beaches.forEach(beach => newState[beach.id] = beach)
            return newState;
        default:
            return state;
    }
 }
// [ beach {b},{b},{b},{b} ]
// new state -> { setting key -> 6:{this a beach. the value of 6} }

export default userBeachesReducer;
