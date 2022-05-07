import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { populateUserBeaches } from "../../store/userBeaches"
import { removeUserBeach } from "../../store/userBeaches"


const UserProfile = () => {
    const { userId } = useParams();
    const history = useHistory()
    const dispatch = useDispatch();
    const userBeaches = useSelector(state => state.userBeaches)
    // console.log("----------- userbeaches",userBeaches)
    const user = useSelector(state => state.session.user)
    const id = user?.id
    console.log("====== USER", user);

    // console.log("**--Hello from userProfile obj.entries ---**", Object.values(userBeaches))

    const beaches = Object.values(userBeaches)
    // console.log("=== beachesVariable", beaches[4])

    useEffect(() => {
        dispatch(populateUserBeaches(user?.id));
    }, [dispatch])

    function editButton(e, beachId){
        e.preventDefault();
        e.stopPropagation();
        history.push(`api/beaches/${beachId}/edit-form`)
    }

    function deleteButton(e, beachId, id) {
        e.preventDefault();
        e.stopPropagation()
        return dispatch(removeUserBeach(beachId, id))
    }
        return (
        <>
        <div>
            <header>
                <h1>{user.username}</h1>
                    <img></img>
            </header>

            <h2>Recent Activity</h2>
        </div>

        <div className ="up-user-beaches">
            <h2>Your Beaches</h2>

            {beaches ? beaches.map((beach) => {

                    return (
                       <>
                        <h2 key={beach.id}>{beach.name}</h2>
                            <p>{beach?.description}</p>
                            <p>{beach?.category}</p>
                            <p>{beach?.address}</p>
                            <p>{beach?.city}</p>
                            <p>{beach?.state}</p>
                            <p>{beach?.zip_code}</p>
                            <button
                                className="up-edit-button"
                                id={`edit-button-${beach.id}`}
                                onClick={(e) => {editButton(e, beach?.id)}}
                            >
                                Edit
                            </button>
                            <button
                                className="up-delete-button"
                                id={`edit-button-${beach?.id}`}
                                onClick={(e) => deleteButton(e, beach?.id, id)}
                            >
                                Delete
                            </button>
                        </>
                    )
            }) : "Loading"}
        </div>
        </>
    )
}

{/* <button className='user-listings-edit-button' id={`edit-button-${location.id}`} onClick={(e) => {editButton(e, location.id)}} >Edit Listing</button>
<button type="submit" className='user-listings-delete-button' id={`delete-button-${location.id}`}
    onClick={(e) => deleteItem(e, location.id)}>Delete Listing</button> */}

export default UserProfile;
