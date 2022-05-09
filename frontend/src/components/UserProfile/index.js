import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getOneBeach } from "../../store/beaches"
import { populateUserBeaches } from "../../store/userBeaches"
import { removeUserBeach } from "../../store/userBeaches"


const UserProfile = () => {
    const { userId } = useParams();
    const { beachId } = useParams();
    const history = useHistory()
    const dispatch = useDispatch();
    const userBeaches = useSelector(state => state.userBeaches)
    const user = useSelector(state => state.session.user)
    const id = user?.id

    const beaches = Object.values(userBeaches)

    useEffect(() => {
        dispatch(populateUserBeaches(user?.id));
    }, [dispatch])

    const postABeach = e => {
        e.preventDefault();
        history.push("/beaches/new")
    }

    function editButton(e, beachId){
        e.preventDefault();
        e.stopPropagation();
        history.push(`/beaches/${beachId}/edit-page`)
    }

    // const selectBeach = (e, beachId) => {
    //     dispatch(getOneBeach(beachId))
    //     history.push(`/beaches/${beachId}`)
    // }



    function deleteButton(e, beachId, id) {
        e.preventDefault();
        e.stopPropagation()
        return dispatch(removeUserBeach(beachId, id))
    }
        return (
        <div className="profile-container">
            <div className="up-profile" >
                <header>
                    <h1>{user?.username}</h1>
                        <img></img>
                </header>

                <h2>Recent Activity</h2>
            </div>

            <div className ="up-user-beaches">
                <h2>Your Beaches</h2>
                <button
                    type="button"
                    onClick={(e) => postABeach(e)}
                >
                    Post a Beach
                </button>

                {beaches ? beaches.map((beach) => {

                        return (
                        <>

                            <div className="up-review-container">
                                <div className="up-beach-name">
                                    <a href={`/beaches/${beach.id}`} className="bl-a-tag" key={beach.id}>{beach.name}</a>
                                </div>
                                    <p>{beach?.description}</p>
                                    <p>{beach?.category}</p>
                                    <p>{beach?.address}</p>
                                    <p>{beach?.city}</p>
                                    <p>{beach?.state}</p>
                                    <p>{beach?.zip_code}</p>
                                    <button
                                        className="up-edit-button"
                                        id={`edit-button-${beach?.id}`}
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
                            </div>
                            </>
                        )
                }) : "Loading"}
            </div>
        </div>
    )
}


export default UserProfile;
