import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createNewReviewThunk } from "../../store/reviews";

const CreateReviewForm = () => {
    const { beachId } = useParams();

    const history = useHistory();
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const beach = useSelector(state => state.beaches.beach)

    console.log('testing review form----->***')

    // const [name, setName] = useState("");
    const [name, setName] = useState("Demo User")
    const [rating, setRating] = useState(5);
    const [answer, setAnswer] = useState("");
    const [errors, setErrors] = useState([])

    // const updateRating = setRating(e.target.value);
    const updateAnswer = (e) => setAnswer(e.target.value);

    useEffect(() => {
        const errors = [];
        if (answer.length < 5) errors.push("Please explain your rating to others.")
        if (answer.length > 1000) errors.push("Thank you for your awesome review!")
        // if (rating === 0) errors.push("Please leave a rating")
        setErrors(errors)
    }, [answer])

    const handleSubmit = e => {
        e.preventDefault();

        const review = {
            name,
            userId : user?.id,
            beachId: beach?.id,
            rating,
            answer
        }

        dispatch(createNewReviewThunk(review, beachId))
        console.log("Handle submit review ----Review", review )
        history.push(`/beaches/beachId/reviews/new`)
    }

    return (
        <>
        <div className="crf-new-review-form-container">
            <h1 className="crf-beach-name">Demo User</h1>
            <div>
                <form className="crf-review-input"
                        onSubmit={handleSubmit}
                >
                    <input className="crf-review-input"
                        type="text"
                        placeholder="This place was so awesome, my friends and I have so so so much fun, and we can't wait to go back. The weather was perfect, and we saw a lot of cool wildlife!"
                        onChange={updateAnswer}
                    >
                    </input>
                    <button className="crf-post-review-button"
                        disabled={!!errors?.length}
                        type="submit"
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
