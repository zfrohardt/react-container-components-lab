// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => (
    <div className='review-list'>
        {props.reviews.map(displayReview)}
    </div>
);

const displayReview = (review, index) => (
    <div key={index} className='review'>
        <h1>{review.display_title}</h1>
        <h2>{review.byline}</h2>
    </div>
)

export default MovieReviews;