import { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createNewReviewThunk } from "../../store/beaches";

const CreateReviewForm = () => {
    const { beachId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch()


    const user = useSelector(state => state.session.user)
    const beach = useSelector(state => state.beaches.beach)
    // const beachId = beach?.id;

    // console.log('testing review form----->*** THIS IS BEACH ID', beachId)

    // const [name, setName] = useState("");
    const [name, setName] = useState("Demo User")
    const [rating, setRating] = useState(5);
    const [answer, setAnswer] = useState("");
    const [errors, setErrors] = useState([])
    // const [beachId, setBeachId] = useState(`${beach.id}`)

    // const updateRating = setRating(e.target.value);
    const updateAnswer = (e) => setAnswer(e.target.value);

    useEffect(() => {
        const errors = [];
        if (answer.length < 5) errors.push("Please explain your rating to others.")
        if (answer.length > 1000) errors.push("Thank you for your awesome review!")
        // if (rating === 0) errors.push("Please leave a rating")
        setErrors(errors)
    }, [answer])


    const handleSubmit = async e => {
        e.preventDefault();

        const review = {
            name,
            userId : user?.id,
            beachId,
            rating,
            answer
        }

        await dispatch(createNewReviewThunk(review, beachId))
        // dispatch(createNewReviewThunk(review, beachId))
        history.push(`/beaches/${beachId}`)
    }

    return (
        <>
        <div className="crf-new-review-form-container">
            <h1 className="crf-beach-name">Demo User</h1>
            <div>
                <form className="crf-review-input-f"
                        onSubmit={handleSubmit}
                >
                    <input className="crf-review-input"
                        type="textarea"
                        placeholder=""
                        onChange={updateAnswer}
                    >
                    </input>
                    <button className="crf-post-review-button"
                        disabled={!!errors?.length}
                        type="submit"
                        onClick={() => console.log('click!')}
                    >
                        Post Review
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}

export default CreateReviewForm
