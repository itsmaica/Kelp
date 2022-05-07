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
        dispatch(getOneBeach(beachId, beachId))
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
                    <div className="ob-container">
                        {/* <h1>One Beach</h1> */}
                        {/* <img src={require(`../../images/${beachId}.jpeg`)}/> */}
                        <h1>{`${beach?.name}`}</h1>
                            <p className="ob-description">{beach?.description}</p>
                            <div className="ob-ba">
                                <div className="ob-address">
                                    <p className="ob-a">{beach?.address} {beach?.city} {beach?.state} {beach?.city} {beach?.zip_code}</p>
                                </div>
                                    <a
                                        className="ob-review-button"
                                        href={`/beaches/${beach?.id}/reviews/new`}
                                        onClick={()=> history.push(`/beaches/${beach.id}/reviews/new`)}
                                    >
                                        Write a Review</a>
                            </div>
                    </div>
                : "Loading"}
        </div>
    )
}

export default ShowOneBeach;
