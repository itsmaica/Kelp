import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route, NavLink, useParams, useHistory } from "react-router-dom"
// import { getBeaches, getOneBeach } from '../../store/beaches'
import { grabOneBeachReviewsThunk } from "../../store/reviews"



const ReviewList = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const { beachId } = useParams();
    const reviews = useSelector(state => state.reviews)


    useEffect(() => {
        dispatch(grabOneBeachReviewsThunk(beachId))
    }, [dispatch, beachId])

    return (
        <ul className="rl-ul">
                <h1></h1>
            { Object.values(reviews).map(review => (
                <li className="rl-li">
                    <div className="rl-container-div">
                        <h4 className="rl-name"></h4>
                        <p className="rl-answer"></p>
                    </div>
                </li>
            ))}
        </ul>

    )


}

export default ReviewList;
