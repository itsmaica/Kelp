import { csrfFetch } from "./csrf";

// const CREATE_REVIEW = "reviews/createReview"
const LOAD_ONE_BEACH_REVIEWS = "reviews/loadOneBeachReviews"

// creating review action
// const makeNewReview = (review) => ({
//     Type: CREATE_REVIEW,
//     payload: review
// })

// creating a review thunk
// export const createNewReviewThunk = (review, beachId) => async (dispatch) => {
//     console.log(`/api/beaches/${beachId}/reviews/new`)
//     const response = await csrfFetch(`/api/beaches/${beachId}/reviews/new`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(review)
//     })

//     if (response.ok) {
//         const review = await response.json();
//         dispatch(makeNewReview(review));
//         return response;
//     } else {
//         return undefined
//     }
// }

export const loadOneBeachReviews = (reviews) => ({
    type: LOAD_ONE_BEACH_REVIEWS,
    payload: reviews
})

export const grabOneBeachReviewsThunk = (beachId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${beachId}`)
    if (response.ok) {
        const reviews = await response.json();
        // console.log("Hello from get reviews beach thunk---->", oneBeach)
        // console.log("oneBeach is not defined-- are you hittign the route?", oneBeach)
        dispatch(loadOneBeachReviews(reviews))
        return reviews
    } else {
        return undefined
    }
}

const initialState = {}

const reviewsReducer = (state=initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD_ONE_BEACH_REVIEWS:
            newState = {...state}
            action.payload.review.forEach(review => {
                newState[action.payload.id] = action.payload
            })
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;

