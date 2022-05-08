import { useEffect, useState } from "react"
import { FaStar } from 'react-icons/fa';

const Ratings = () => {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (
        <>
        <hi>HELLO</hi>

        <label>Rating
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
        </label>

        </>
    )
}

export default Ratings
