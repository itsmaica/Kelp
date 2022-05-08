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
                            <h1>{`${beach?.name}`}</h1>
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
                                <div className="ob-reviews-container">
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
                        </div>
                    : "Loading"}
            </div>
        )
    }
}

export default ShowOneBeach;
