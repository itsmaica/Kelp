import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route, NavLink, useParams, useHistory } from "react-router-dom"
import { getBeaches, getOneBeach } from '../../store/beaches'
// import { grabOneBeachReviewsThunk } from "../../store/reviews"
import ShowOneBeach from "../ShowOneBeach"


const BeachList = () => {

    const history = useHistory();

    const {beachId} = useParams();

    const dispatch = useDispatch();
    const beaches = useSelector(state => state.beaches)

    useEffect(() => {
        dispatch(getBeaches());
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(grabOneBeachReviewsThunk(beachId))
    // }, dispatch, beachId)

    const clickBeach = (beachId) => {
        // history.push(`/beaches/${beachId}`)
        // return dispatch(getOneBeach(beachId))
        // dispatch(grabOneBeachReviewsThunk(beachId))
    }

    return (
        <div className="bl-big-container">
            <h4 className="bl-all-results">All Results</h4>
                <ul>
                    { Object.values(beaches).map(beach =>(
                    <li className ="bl-each-beach-li">
                        <div className="bl-container-div">
                            <a className="bl-a-tag" href={`/beaches/${beach.id}`} onClick={clickBeach}>{beach.name}</a>
                            <p className="bl-p-tag">{beach.description}</p>
                            <img></img>
                        </div>
                    </li>
                    ))}
                </ul>
        </div>
    )
}

export default BeachList;
