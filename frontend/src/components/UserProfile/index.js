import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route, NavLink, useParams } from "react-router-dom"
import { populateUserBeaches } from "../../store/userBeaches"

// import './UserProfileComponent'

const UserProfile = () => {
    const { userId } = useParams();

    const dispatch = useDispatch();
    const userBeaches = useSelector(state => state.userBeaches)
    const user = useSelector(state => state.session.user)
    console.log("======", user.username);

    // console.log("**--Hello from userProfile obj.entries ---**", Object.values(userBeaches))

    const beaches = Object.values(userBeaches)
    console.log("=== beachesVariable", beaches[4])

    useEffect(() => {
        dispatch(populateUserBeaches(userId));
    }, [dispatch, userId])

        return (
        <>
        <div>
            <header>
                <h1>{user.username}</h1>
                    <img></img>
            </header>

            <h2>Recent Activity</h2>
        </div>

        <div className ="user-beaches">
            <h2>Your Beaches</h2>
            {beaches.map((beach) => {
                    return (
                       <>
                        <h2>{beach.name}</h2>
                            <p>{beach.description}</p>
                            <p>{beach.category}</p>
                            <p>{beach.address}</p>
                            <p>{beach.city}</p>
                            <p>{beach.state}</p>
                            <p>{beach.zip_code}</p>
                            <button>Edit</button>
                            <button>Delete</button>
                        </>
                    )
            })}
        </div>
        </>
    )
}

export default UserProfile;
