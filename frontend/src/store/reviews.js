import { csrfFetch } from "./csrf";

const LOAD_ONE_BEACH_REVIEWS = "reviews/loadOneBeachReviews"


export const loadOneBeachReviews = (reviews) => ({
    type: LOAD_ONE_BEACH_REVIEWS,
    payload: reviews
})

export const grabOneBeachReviewsThunk = (beachId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${beachId}`)
    if (response.ok) {
        const reviews = await response.json();
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
