import { csrfFetch } from "./csrf";

const LOAD_ONE_BEACH_REVIEWS = "reviews/loadOneBeachReviews"

// export const loadOneBeachReviews = () => ({
//     type: LOAD_ONE_BEACH_REVIEWS,
//     payload
// })

// export const grabOneBeachReviewsThunk = (beachId) => async (dispatch) => {
//     const response = await csrfFetch(`/api/beaches/${beachId}`)
//     if (response.ok) {
//         const oneBeach = await response.json();
//         console.log("Hello from get review for one beach thunk---->", oneBeach)
//         // console.log("oneBeach is not defined-- are you hittign the route?", oneBeach)
//         dispatch(loadOneBeachReviews(oneBeach))
//         return response
//     } else {
//         return undefined
//     }
// }

// const initialState = {}

// const reviewReducer = (state=initialState, action) => {
//     let newState;
//     switch(action.type) {
//         case LOAD_ONE_BEACH_REVIEWS:
//             console.log("payload from reviewsReducer--->",action.payload)
//             newState = {...state}
//             action.payload.forEach(review => {
//                 newState[review.id] = review
//             })
//             return newState;
//         default:
//             return state;
//     }
// }

// export default reviewReducer;
