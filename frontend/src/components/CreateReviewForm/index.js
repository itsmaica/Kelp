import './CreateReviewForm.css'


const CreateReviewForm = () => {
    return (
        <>
        <div className="crf-new-review-form-container">
            <h1 className="crf-beach-name">Beach Name Here</h1>
            <div>
                <form className="crf-review-input">
                    <input className="crf-review-input" type="text"></input>
                    <button className="crf-post-review-button">Post Review</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default CreateReviewForm
