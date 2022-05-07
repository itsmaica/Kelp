import { csrfFetch } from "./csrf";

// const CREATE_REVIEW = "reviews/createReview"
const LOAD_ONE_BEACH_REVIEWS = "reviews/loadOneBeachReviews"
// const DELETE_REVIEW = "reviews/deleteReviews"


//destroy a review
// const destroyReview1 = (review) => ({
//     type: DELETE_REVIEW,
//     payload: review
// })

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


//Delete Review Thunk
// export const removeReview = (reviewId) => async (dispatch) => {
//     console.log("HELLO FROM DELETE REVIEW THUNK------")
//     const response = await csrfFetch(`/api/reviews/${reviewId}`, {
//         method: 'DELETE'
//     })
//     console.log("------ response",response);
//         const review = await response.json();
//         dispatch(destroyReview1(review));
//         return response;
// }

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
