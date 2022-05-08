import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getOneBeach, loadOneBeach } from '../../store/beaches';
import { grabOneBeachReviewsThunk } from "../../store/reviews";
import { removeReviewInBeachesStore } from "../../store/beaches";
import { useEffect, useState } from 'react';
import beachBanner from "../../images/beachBanner.jpeg"

const ShowOneBeach = () => {


    const [isLoaded, setIsLoaded] = useState(false)
    const { beachId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const beach = useSelector(state => state.beaches.beach);
    const currentUser = useSelector(state => state.session.user.id)
    console.log("current user's id--->", currentUser)

    // if the current users id matches the review owner render the delete button. if not, don't show it and allow use.

    useEffect(() => {
        dispatch(getOneBeach(beachId))
            .then(setIsLoaded(true))

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
                                <div className="ob-img-container">
                                    <img className="ob-img" src={require('../../images/beachBanner.jpeg')}/>
                                </div>
                    {beach  ?
                        <div className="ob-container">
                            <h1 className="ob-h1">{`${beach?.name}`}</h1>
                                {/* <p className="ob-description">{beach?.description}</p> */}
                                <div className="ob-ba">
                                    <div className="below-banner">
                                            <a
                                                className="ob-review-button"
                                                href={`/beaches/${beach?.id}/reviews/new`}
                                                onClick={()=> history.push(`/beaches/${beach?.id}/reviews/new`)}
                                            >
                                                Write a Review</a>
                                        <div className="ob-address">
                                            <p className="address">Address</p>
                                            <p className="ob-a">{beach?.address} {beach?.city} {beach?.state} {beach?.city} {beach?.zip_code}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ob-reviews-container">
                                    {beach?.Reviews.map((review) => {
                                        return (
                                            <div key={review?.id} className="review-container">
                                                <h1>{review?.name}</h1>
                                                <p>{review?.answer}</p>
                                                { currentUser === review?.userId ?
                                                    <button
                                                    className="ob-delete-review-button"
                                                    id={`edit-button-${review?.id}`}
                                                    onClick={(e) => deleteButton(e, review?.id)}
                                                >
                                                    Delete
                                                </button> :
                                                    <p>Hide Me</p>
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                        </div>
                    : "Loading"}
            </div>
        )
    }
}

export default ShowOneBeach;
