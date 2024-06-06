// import React, { useState } from 'react';
// import './ClientReviewStyles.css';

// const initialReviews = [
//     {
//         name: "John Doe",
//         review: "This trip was amazing! Everything was perfectly organized and the guides were fantastic.",
//         rating: 5
//     },
//     {
//         name: "Jane Smith",
//         review: "A truly unforgettable experience. Highly recommended!",
//         rating: 4
//     },
//     {
//         name: "Samuel Green",
//         review: "Great service and beautiful destinations. Will definitely book again.",
//         rating: 5
//     }
// ];

// function ClientReview() {
//     const [reviews, setReviews] = useState(initialReviews);
//     const [name, setName] = useState("");
//     const [rating, setRating] = useState(5);
//     const [review, setReview] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newReview = { name, rating, review };
//         setReviews([...reviews, newReview]);
//         setName("");
//         setRating(5);
//         setReview("");
//     };

//     return (
//         <div className="client-review">
//             <h2>Client Reviews</h2>
//             <div className="reviews">
//                 {reviews.map((review, index) => (
//                     <div key={index} className="review">
//                         <h3>{review.name}</h3>
//                         <p>{review.review}</p>
//                         <div className="rating">
//                             {"⭐".repeat(review.rating)}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <h2>Add a Review</h2>
//             <form onSubmit={handleSubmit} className="review-form">
//                 <input
//                     type="text"
//                     placeholder="Your Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <div className="star-rating">
//                     {[...Array(5)].map((star, index) => {
//                         index += 1;
//                         return (
//                             <button
//                                 type="button"
//                                 key={index}
//                                 className={index <= rating ? "on" : "off"}
//                                 onClick={() => setRating(index)}
//                             >
//                                 <span className="star">&#9733;</span>
//                             </button>
//                         );
//                     })}
//                 </div>
//                 <textarea
//                     placeholder="Your Review"
//                     value={review}
//                     onChange={(e) => setReview(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default ClientReview;



import React, { useState } from 'react';
import './ClientReviewStyles.css';

const initialReviews = [
    { name: "John Doe", review: "This trip was amazing! Everything was perfectly organized and the guides were fantastic.", rating: 5 },
    { name: "Jane Smith", review: "A truly unforgettable experience. Highly recommended!", rating: 4 },
    { name: "Samuel Green", review: "Great service and beautiful destinations. Will definitely book again.", rating: 5 }
];

function ClientReview() {
    const [reviews, setReviews] = useState(initialReviews);
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { name, rating, review };
        setReviews([...reviews, newReview]);
        setName("");
        setRating(5);
        setReview("");
    };

    const handleRating = (index) => {
        setRating(index);
    };

    return (
        <div className="client-review">
            <h1>Client Reviews</h1>
            <div className="reviews">
                {reviews.map((rev, index) => (
                    <div key={index} className="review">
                        <h3>{rev.name}</h3>
                        <p>{rev.review}</p>
                        <div className="rating">
                            {"⭐".repeat(rev.rating)}
                        </div>
                    </div>
                ))}
            </div>

            <h2 className='halftwo'>Add a Review</h2>
            <form onSubmit={handleSubmit} className="review-form">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            type="button"
                            key={star}
                            className={star <= rating ? "on" : "off"}
                            onClick={() => handleRating(star)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    ))}
                </div>
                <textarea
                    placeholder="Your Review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ClientReview;
