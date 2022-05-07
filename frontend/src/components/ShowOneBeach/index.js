import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getOneBeach, loadOneBeach } from '../../store/beaches';
import { grabOneBeachReviewsThunk } from "../../store/reviews";
// import { removeReview} from "../../store/reviews";
import { removeReviewInBeachesStore } from "../../store/beaches";
import { useEffect, useState } from 'react';

const ShowOneBeach = () => {

    const [isLoaded, setIsLoaded] = useState(false)
    const { beachId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const beach = useSelector(state => state.beaches.beach);
    // const reviews = useSelector(state => state.beaches.beach.Reviews);
    // console.log("Current beach id is what? ---->", beach)
    // const reviews = useSelector(state => state.beaches.beach.Reviews)

    useEffect(() => {
        dispatch(getOneBeach(beachId))
            .then(setIsLoaded(true))
            // mightneed to comment back out
        // dispatch(grabOneBeachReviewsThunk(beachId))
    }, [dispatch]);

    const deleteButton = (e, reviewId) => {
            e.preventDefault();
            e.stopPropagation()
            dispatch(removeReviewInBeachesStore(reviewId))
            .then(() => dispatch(getOneBeach(beachId)))
    }

    if (!isLoaded) {
        return null
    } else {

        return (
            <div>
                    {beach  ?
                        <div className="ob-container">
                            {/* <h1>One Beach</h1> */}
                            {/* <img src={require(`../../images/${beachId}.jpeg`)}/> */}
                            <h1>{`${beach?.name}`}</h1>
                                {/* <div>{ beach.Reviews[0].name }</div> */}
                                <p className="ob-description">{beach?.description}</p>
                                <div className="ob-ba">
                                    <div className="ob-address">
                                        <p className="ob-a">{beach?.address} {beach?.city} {beach?.state} {beach?.city} {beach?.zip_code}</p>
                                    </div>
                                        <a
                                            className="ob-review-button"
                                            href={`/beaches/${beach?.id}/reviews/new`}
                                            onClick={()=> history.push(`/beaches/${beach?.id}/reviews/new`)}
                                        >
                                            Write a Review</a>
                                </div>
                                {beach?.Reviews.map((review) => {
                                    return (
                                        <div key={review?.id}>
                                            <h1>{review?.name}</h1>
                                            <p>{review?.answer}</p>
                                            <button
                                                className="ob-delete-review-button"
                                                id={`edit-button-${review?.id}`}
                                                onClick={(e) => deleteButton(e, review?.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )
                                })}
                        </div>
                    : "Loading"}
            </div>
        )
    }



}

export default ShowOneBeach;
