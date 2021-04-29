import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'RAF966LEAhu5620xf1PTlWCoCQBNAMBu' // default key'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
        }
    }

    componentDidMount() {
        fetch(URL).then(resp => resp.json())
        .then(json => {
            this.setState({
                reviews: json.results,
            })
        });
    }

    render() {
        return (
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}