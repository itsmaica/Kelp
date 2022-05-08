import { csrfFetch } from "./csrf";
//create a beach
const LOAD_BEACHES = 'beaches/loadBeaches'
const LOAD_ONE_BEACH = 'beaches/loadOneBeach'
const CREATE_BEACH = 'beaches/createBeach'
const REMOVE_BEACH = 'beaches/removeBeach'
const CREATE_REVIEW = "beaches/createReview"
const DESTROY_REVIEW = "beaches/destroyReview"
const UPDATE_ONE_BEACH = "beaches/updateBeach"


//action - see all the beaches
export const loadBeaches = (beaches) => ({
    type: LOAD_BEACHES,
    payload: beaches
    //array of obj from db
});

//action -see one beach
export const loadOneBeach = (oneBeach) => ({
    type: LOAD_ONE_BEACH,
    payload: oneBeach
})

//action -make a post for a beach
export const createBeach = (beach) =>({
        type: CREATE_BEACH,
        payload: beach
})

//action - delete a beach
export const removeBeach = (beachId) => ({
    type:REMOVE_BEACH,
    payload: beachId
})

// create review
export const makeNewReview = (review) => ({
    type: CREATE_REVIEW,
    payload: review
})

//delete a beaches review
export const destroyReview = (review) => ({
    type: DESTROY_REVIEW,
    payload: review
})

// udpate beach
export const updateOneBeach = (beach) => ({
        type: UPDATE_ONE_BEACH,
        payload: beach
})

//thunk - get all beaches
export const getBeaches = () => async dispatch => {
    const response = await csrfFetch(`/api/beaches`);
        const beaches = await response.json();
        dispatch(loadBeaches(beaches))
        return response;
};

//thunk - get one beach - NEED TO DEBUG
export const getOneBeach = (beachId) => async dispatch => {
    const response = await csrfFetch(`/api/beaches/${beachId}`)
    if (response.ok) {
        const oneBeach = await response.json();
        // console.log("This is the beach from the fetch in src", beach)
        dispatch(loadOneBeach(oneBeach));
        return response;
    } else {
        return undefined
    }
}

//thunk - create a beach
export const createOneBeach = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/beaches/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const beach = await response.json();
        dispatch(createBeach(beach));
        return response
    } else {
        return undefined;
    }
};

// creating a review thunk
export const createNewReviewThunk = (review, beachId) => async (dispatch) => {
    console.log("Create review thunk", beachId)
    const response = await csrfFetch(`/api/beaches/${beachId}/reviews/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        console.log("response hello------", response.ok)
        const review = await response.json();
        dispatch(makeNewReview(review));
        // return response;
    } else {
        return undefined
    }
}

export const removeReviewInBeachesStore = (reviewId) => async (dispatch) => {
    console.log("HELLO FROM DELETE REVIEW THUNK------")
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })
    console.log("------ response",response);
        const review = await response.json();
        dispatch(destroyReview(review));
        return response;
}

//edit a beach
export const updateBeachThunk = (payload, oldId) => async (dispatch) => {
    console.log("Hello from PUT THUNK---", oldId)
    const response = await csrfFetch(`/api/beaches/${oldId}`, {
        method: 'PUT',
        Headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const updatedBeach = await response.json()
        dispatch(updateOneBeach(updatedBeach));
        return response;
    }
}

const initialState = {}

const beachReducer = ( state = initialState, action ) => {
    let newState;
    switch(action.type) {
        case LOAD_BEACHES:
            //keep previous beaches if there
            newState = {...state}
            action.payload.forEach(beach => {
                newState[beach.id] = beach
            })
            return newState;
        case LOAD_ONE_BEACH:
            newState = {...state}
            newState.beach = action.payload
            // action.payload
            return newState;
        case CREATE_BEACH:
            newState = {...state.beaches, [action.payload.id]: action.payload}
            return newState;
        case REMOVE_BEACH:
            newState = {...state};
            delete newState[action.beachId];
            return newState
         case CREATE_REVIEW:
             console.log("_______STATE.BEACH_____", state)
            newState = {...state, [action.payload.id]: action.payload}
            return newState;
        case DESTROY_REVIEW:
            newState = {...state}
            const reviewId = action.payload.id
            const reviewsArray = newState.beach.Reviews
            const filteredReviewsArray = reviewsArray.filter((review) => {
                if (review.id !== reviewId) {
                return review
                }})
            newState.beach.Reviews = filteredReviewsArray;
            return newState;
        case UPDATE_ONE_BEACH:
            newState = {...state}
            newState.beach = action.payload
            return newState
        default:
            return state;
    }
}

export default beachReducer;
