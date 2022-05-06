// import { getBeaches } from "./beaches";
import { csrfFetch } from "./csrf";


const GET_USER_BEACHES = 'userBeaches/getUserBeaches';


const getUserBeaches = (userBeaches) => ({
    type: GET_USER_BEACHES,
    payload: userBeaches
})

export const populateUserBeaches = (userId) => async (dispatch) => {

    console.log("hello from userBeaches thunk---->", userId)
    const response = await csrfFetch(`/api/usersBeaches/${userId}/beaches`)

    console.log("***===Populate userBeaches Thunk ===+**", response)
        const userBeaches = await response.json();
        console.log("USERBEACHES", userBeaches)
        dispatch(getUserBeaches(userBeaches))
        return response;
}

const initialState = {}

const userBeachesReducer = ( state = initialState, action) => {
    let newState;
    switch(action.type) {
        case GET_USER_BEACHES:
            newState = {...state}
            // const beaches = action.payload.Beach
            console.log("Action.payload --->", action.payload)
            // console.log("userBeaches reducer here --->>", beaches)
            // console.log()
            action.payload.Beaches.forEach(beach => newState[beach.id] = beach)
            return newState;
        default:
            return state;
    }
 }
// [ beach {b},{b},{b},{b} ]
// new state -> { setting key -> 6:{this a beach. the value of 6} }

export default userBeachesReducer;
