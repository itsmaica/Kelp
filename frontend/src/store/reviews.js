import { csrfFetch } from "./csrf";

const CREATE_REVIEW = "reviews/createReview"
const LOAD_ONE_BEACH_REVIEWS = "reviews/loadOneBeachReviews"

//creating review action
const makeNewReview = (review) => ({
    Type: CREATE_REVIEW,
    payload: review
})

// creating a review thunk
export const createNewReviewThunk = (review, beachId) => async (dispatch) => {
    console.log(`/api/beaches/${beachId}/reviews/new`)
    const response = await csrfFetch(`/api/beaches/${beachId}/reviews/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const review = await response.json();
        dispatch(makeNewReview(review));
        return response;
    } else {
        return undefined
    }
}

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

const initialState = {}

const reviewsReducer = (state=initialState, action) => {
    let newState;
    switch(action.type) {
        case CREATE_REVIEW:
            newState = {...state.reviews, [action.review.id]: action.review}
            return newState;
        // case LOAD_ONE_BEACH_REVIEWS:
        //     console.log("payload from reviewsReducer--->",action.payload)
        //     newState = {...state}
        //     action.payload.forEach(review => {
        //         newState[review.id] = review
        //     })
        //     return newState;
        default:
            return state;
    }
}

export default reviewsReducer;
