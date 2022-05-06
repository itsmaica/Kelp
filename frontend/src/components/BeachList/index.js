import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route, NavLink, useParams, useHistory } from "react-router-dom"
import { getBeaches, getOneBeach } from '../../store/beaches'
// import { grabOneBeachReviewsThunk } from "../../store/reviews"
import ShowOneBeach from "../ShowOneBeach"


import './BeachList.css'

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
        <div>
            <h1>Beach List</h1>
                <ul>
                    { Object.values(beaches).map(beach =>(
                    <li className ="each-beach" key={beach.id}>
                        <a  href={`/beaches/${beach.id}`}
                            onClick={clickBeach}
                        >
                            {beach.name}
                        </a>
                    </li>
                    ))}
                </ul>
        </div>
    )
}

export default BeachList;
