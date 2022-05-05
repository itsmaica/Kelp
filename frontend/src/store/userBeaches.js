// import { getBeaches } from "./beaches";
import { csrfFetch } from "./csrf";


const GET_USER_BEACHES = 'userBeaches/getUserBeaches';


const getUserBeaches = (userBeaches) => ({
    type: GET_USER_BEACHES,
    payload: userBeaches
})

export const populateUserBeaches = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/users/${userId}/beaches`)

        const userBeaches = await response.json();
        dispatch(getUserBeaches(userBeaches))
        return response;
}

const initialState = {}

const userBeachesReducer = ( state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_USER_BEACHES:
            newState = {...state}
            const beaches = action.payload.Beaches
            beaches.forEach(beach => newState[beach.id] = beach)
            return newState;
        default:
            return state;
    }
 }
// [ beach {b},{b},{b},{b} ]
// new state -> { setting key -> 6:{this a beach. the value of 6} }

export default userBeachesReducer;
