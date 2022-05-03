//create a beach
// const CREATE_BEACH = 'beach/CREATE_BEACH'

// const createBeach = beach =>({
//         type: CREATE_BEACH,
//         beach
// })

// export const createOneBeach = (payload) => async dispatch => {
//     const response = await fetch(`/api/beach`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//     });

//     if (response.ok) {
//         const beach = await response.json();
//         dispatch(createBeach(beach));
//         return beach
//     } else {
//         return undefined
//     }
// }

// const initialState = {}

// const beachReducer = ( state = initialState, action ) => {
//     switch(action.type) {
//         case CREATE_BEACH:
//             console.log(action.beach);
//             return{
//                 ...state,
//                 [action.beach.id]: action.beach
//             }
//     }
// }

// export default beachReducer;
