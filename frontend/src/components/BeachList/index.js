import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route, NavLink, useParams, useHistory } from "react-router-dom"
import { getBeaches, getOneBeach } from '../../store/beaches'
import * as sessionActions from '../../store/session';


// import { grabOneBeachReviewsThunk } from "../../store/reviews"
import ShowOneBeach from "../ShowOneBeach"
import logo from "../../images/logo.png"


const BeachList = () => {

    const history = useHistory();

    const {beachId} = useParams();

    const dispatch = useDispatch();
    const beaches = useSelector(state => state.beaches)

    const sessionUser = useSelector(state => state.session.user);


    useEffect(() => {
        dispatch(getBeaches());
    }, [dispatch])


    return (
        <>
        {/* <div className="beach-list-h">
            <a className="hp-kelp-link-c" href="/">kelp</a>
            <img className="kelp-logo-c" src={logo}/>
        </div> */}

            {/* <div className="beach-list-h">
                <div className="hp-kelp-logo-b">
                    <a className="hp-kelp-link-b" href="/">kelp</a>
                    <img className="kelp-logo-b" src={logo}/>
                </div>
                <div id="demo-button-message-container">
                    <p id="demo-message">Welcome, Demo!</p>
                    <button id="logout-button" onClick={logout}>Log Out</button>
                </div>
            </div> */}

        <div className="bl-big-container">
            <h4 className="bl-all-results">All Results</h4>
                <ul>
                    { Object.values(beaches).map(beach =>(
                    <li className ="bl-each-beach-li">
                        <div className="bl-container-div">
                            <a className="bl-a-tag" href={`/beaches/${beach.id}`}>{beach.name}</a>
                            <p className="bl-p-tag">{beach.description}</p>
                            <div className="beach-pic-container">
                                <img className="beachPic" src={require('../../images/beach-pic.jpeg')}/>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
        </div>
        </>
    )
}

export default BeachList;
