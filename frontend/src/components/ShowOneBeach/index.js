import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getOneBeach, loadOneBeach } from '../../store/beaches'
// import { grabOneBeachReviewsThunk } from "../../store/reviews"
import { useEffect, useState } from 'react';


const ShowOneBeach = () => {

    const history = useHistory();

    const { beachId } = useParams();

    const dispatch = useDispatch();
    const beach = useSelector(state => state.beaches.beach)
    // console.log("Current beach id is what? ---->", beach)


    useEffect(() => {
        dispatch(getOneBeach(beachId))
    }, [dispatch, beachId]);

    // const writeReview = e => {
    //     e.preventDefault();
    //     history.push(`${beachId}/reviews/new`)
    // }

    // useEffect(() => {
    //     // dispatch(grabOneBeachReviewsThunk(beachId))
    // }, dispatch, beachId)

    // let reviewTemplate;

    // if (beach.Reviews) {
    //     console.log(beach.Reviews)
    //     ReviewTemplate = (
    //         <>
    //         <h1>{review.name}</h1>
    //         <h2>{review.answer}</h2>
    //         </>
    //     )
    //     }
    // }
    // const reviewArray = Object.values(beach.Reviews)
    // console.log("Hello",reviewArray)


    return (
        <div>
                {beach ?
                    <div>
                        <h1>One Beach</h1>
                        {/* <img src={require(`../../images/${beachId}.jpeg`)}/> */}
                        <h2>{`${beach.name}`}</h2>
                            <p>{beach.category}</p>
                            <p>{beach.description}</p>
                            <p>{beach.address}</p>
                            <p>{beach.city}</p>
                            <p>{beach.state}</p>
                            <p>{beach.city}</p>
                            <p>{beach.zip_code}</p>
                            <button
                                onClick={() => history.push(`/${beachId}/reviews/new`)}
                            >
                                Write a Review
                            </button>
                            {/* <a href={`${beach?.id}/reviews/new>`}>Write a Review</a> */}
                            <div>
                                {/* <ul>{
                                    beach.Reviews.map((review) => {

                                        return (
                                            <>
                                                <h2 key={beach.Review.id}>{beach.Review.name}</h2>
                                                    <p>{beach.Reivew.answer}</p>
                                            </>
                                        )
                                        // console.log("render these -->",review.name)

                                    })
                                }</ul> */}
                            </div>
                    </div>
                : "Loading"}
        </div>
    )
}

export default ShowOneBeach;
