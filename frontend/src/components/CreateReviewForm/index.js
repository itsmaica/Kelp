import { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createNewReviewThunk } from "../../store/beaches";
import { FaStar } from 'react-icons/fa';

const CreateReviewForm = () => {
    const { beachId, userId } = useParams();
    console.log("------ useParams",useParams())
    const history = useHistory();
    const dispatch = useDispatch()


    const user = useSelector(state => state.session.user)
    const beach = useSelector(state => state.beaches.beach)

    const [name, setName] = useState("Demo User")
    const [rating, setRating] = useState(null);
    const [answer, setAnswer] = useState("");
    const [errors, setErrors] = useState([])
    const [hover, setHover] = useState(null)

    const updateAnswer = (e) => setAnswer(e.target.value);

    useEffect(() => {
        const errors = [];
        if (answer.length < 5) errors.push("Please explain your rating to others.")
        if (answer.length > 1000) errors.push("Thank you for your awesome review!")
        if (rating === null) errors.push("please add a rating")
        setErrors(errors)
    }, [answer, rating])


    const handleSubmit = async e => {
        e.preventDefault();

        const review = {
            name,
            userId : user?.id,
            beachId,
            rating,
            answer
        }

        console.log("---review",review)

       await dispatch(createNewReviewThunk(review, beachId))
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
                    <div className='rating-box'>
                                    <div>
                                        <div>
                                            {[...Array(5)].map((star, i) => {
                                                const ratingValue = i + 1;
                                                return (
                                                    <label>
                                                        <input type="radio" name='rating' value={ratingValue} onClick={(e) => setRating(ratingValue)} />
                                                        <FaStar
                                                            className="star"
                                                            color={ratingValue <= (hover || rating) ? "#ffc107" : "grey"}
                                                            size={30}
                                                            onMouseEnter={() => setHover(ratingValue)}
                                                            onMouseLeave={() => setHover(null)} />
                                                    </label>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                    <input className="crf-review-input"
                        type="textarea"
                        placeholder=""
                        onChange={updateAnswer}
                    >
                    </input>
                    <ul>
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
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
