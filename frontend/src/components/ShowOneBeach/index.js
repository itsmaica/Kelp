import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getOneBeach, loadOneBeach } from '../../store/beaches';
import { grabOneBeachReviewsThunk } from "../../store/reviews";
import { removeReviewInBeachesStore } from "../../store/beaches";
import { useEffect, useState } from 'react';
import beachBanner from "../../images/beachBanner.jpeg"
import icon from "../../images/icon.jpeg"
import logo from "../../images/logo.png"
import * as sessionActions from '../../store/session';



const ShowOneBeach = () => {


    const [isLoaded, setIsLoaded] = useState(false)
    const { beachId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const beach = useSelector(state => state.beaches.beach);
    const sessionUser = useSelector(state => state.session.user)
    // console.log("current user's id--->", currentUser)

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

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push("/");
      };

    if (!isLoaded) {
        return null
    } else {
        return (
            <>


            {/* <div className="beach-list-h">
                <div className="hp-kelp-logo-b">
                    <a className="hp-kelp-link-b" href="/">kelp</a>
                    <img className="kelp-logo-b" src={logo}/>
                </div>
            </div> */}
{/*
            <div className="beach-list-h">
                <div className="hp-kelp-logo-b">
                    <a className="hp-kelp-link-b" href="/">kelp</a>
                    <img className="kelp-logo-b" src={logo}/>


                </div>
                {sessionUser ?
                     <div id="demo-button-message-container">
                     <p id="demo-message">Welcome, Demo!</p>
                     <button id="logout-button" onClick={logout}>Log Out</button>
                 </div> : <p></p>
                }

            </div> */}

            <div id="apples">
                 <div className="ob-img-container">
                    <img className="ob-img" src={require('../../images/beachBanner.jpeg')}/>
                </div>
                    {beach  ?
                        <div className="ob-container">
                            <h1 className="ob-h1">{`${beach?.name}`}</h1>
                                {/* <p className="ob-description">{beach?.description}</p> */}
                                <div className="ob-ba">
                                    <div className="below-banner">
                                        {sessionUser?.id ?
                                                <a
                                                    className="ob-review-button"
                                                    href={`/beaches/${beach?.id}/reviews/new`}
                                                    onClick={()=> history.push(`/beaches/${beach?.id}/reviews/new`)}
                                                >
                                                    Write a Review
                                                </a> : <p></p>
                                        }
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
                                                <div className="ob-icon-name">
                                                    <img className="user-icon-review" src={require(`../../images/icon.jpeg`)}/>
                                                    <h3>{review?.name}</h3>
                                                </div>
                                                <p className="review-answer">{review?.answer}</p>
                                                { sessionUser?.id === review?.userId ?
                                                    <button
                                                    className="ob-delete-review-button"
                                                    id={`edit-button-${review?.id}`}
                                                    onClick={(e) => deleteButton(e, review?.id)}
                                                >
                                                    Delete
                                                    </button>
                                                    : <p></p>}
                                            </div>
                                        )
                                    })}
                                </div>
                        </div>
                    : "Loading"}
            </div>
            </>
        )
    }
}

export default ShowOneBeach;
