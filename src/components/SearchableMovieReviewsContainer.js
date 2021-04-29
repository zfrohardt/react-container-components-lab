import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: '',
        }
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} type="text" />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        );
    }

    changeHandler = event => {
        this.setState({
            searchTerm: event.target.value,
        })
    }

    submitHandler = event => {
        event.preventDefault();
        fetch(`${URL}&query=${this.state.searchTerm}`).then(resp => resp.json()).then(results => {
            this.setState({
                reviews: results.results,
            })
        })
    }
}