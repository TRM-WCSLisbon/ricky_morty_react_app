import React, { Component } from 'react';
import './Search.css';
import axios from 'axios';
import Loader from './loader.gif';
import PageNavigation from './Search/PageNavigation';
import {
  CardGrid, Card,
} from './Characters/styles';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
      totalResults: 0,
      totalPages: 0,
      currentPageNo: 0,
    };

    this.cancel = '';
  }

	/**
	 * Get the Total Pages count.
	 *
	 * @param total
	 * @param denominator Count of results per page
	 * @return {number}
	 */
	getPageCount = (total, denominator) => {
	  const divisible	= total % denominator === 0;
	  const valueToBeAdded = divisible ? 0 : 1;
	  return Math.floor(total / denominator) + valueToBeAdded;
	};

	/**
	 * Fetch the search results and update the state with the result.
	 * Also cancels the previous query before making the new one.
	 *
	 * @param {int} updatedPageNo Updated Page No.
	 * @param {String} query Search Query.
	 *
	 */
	// fetchSearchResults = (updatedPageNo = '', query) => {
	fetchSearchResults = (query) => {
	//   const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
	  // const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;
	  const searchUrl = `https://rickandmortyapi.com/api/character/?name=${query}`;

	  if (this.cancel) {
	    this.cancel.cancel();
	  }

	  this.cancel = axios.CancelToken.source();

	  axios.get(searchUrl, {
	    cancelToken: this.cancel.token,
	  })
	    .then((res) => {
	      const { total } = res.data;
	      const totalPagesCount = this.getPageCount(total, 50);
	      // const resultNotFoundMsg = ! res.data.hits.length
	      // const resultNotFoundMsg = res.data.results.length

	      this.setState({
	        // results: res.data.hits,
	        results: res.data.results,
	        // message: resultNotFoundMsg,
	        totalResults: total,
	        totalPages: totalPagesCount,
	        currentPageNo: updatedPageNo,
	        loading: false,
	      });
	    })
	    .catch((error) => {
	      // console.log(error);
	      if (axios.isCancel(error) || error) {
	        this.setState({
	          loading: false,
	          message: 'There are no more search results. Please try a new search',
	        });
	      }
	    });
	};

	handleOnInputChange = (event) => {
	  const query = event.target.value;
	  if (!query) {
	    this.setState({
	      query, results: {}, message: '', totalPages: 0, totalResults: 0,
	    });
	  } else {
	    this.setState({ query, loading: true, message: '' }, () => {
	      this.fetchSearchResults(1, query);
	    });
	  }
	};

	/**
	 * Fetch results according to the prev or next page requests.
	 *
	 * @param {String} type 'prev' or 'next'
	 */
	// handlePageClick = ( type ) => {
	// 	event.preventDefault();
	// 	const updatePageNo = 'prev' === type
	// 		? this.state.currentPageNo - 1
	// 		: this.state.currentPageNo + 1;

	// 	if( ! this.state.loading  ) {
	// 		this.setState( { loading: true, message: '' }, () => {
	// 			this.fetchSearchResults( updatePageNo, this.state.query );
	// 		} );
	// 	}
	// };

	renderSearchResults = () => {
	  const { results } = this.state;
	  // console.warn(results);

	  if (Object.keys(results).length && results.length) {
	    return (
  <div>
    { results.map((result) => {
      <CardGrid>
        <Card
          key={result.id}
        >
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={result.image} alt={result.name} />
              </div>
              <div className="card-back">
                <ul>
                  <li>
                    <span>{result.id}</span>
                  </li>
                  <li>
                    <h3>Name:</h3>
                    {' '}
                    <span>{result.name}</span>
                  </li>
                  <li>
                    <h3>Species:</h3>
                    {' '}
                    <span>{result.species}</span>
                  </li>
                  <li>
                    <h3>Status:</h3>
                    {' '}
                    <span>
                      {result.status}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </CardGrid>;
	  })}
  </div>
	    );
	  }
	};

	render() {
	  const {
	    query, loading, message, currentPageNo, totalPages,
	  } = this.state;

	  const showPrevLink = currentPageNo > 1;
	  const showNextLink = totalPages > currentPageNo;

	  return (
  <div className="container">
    {/*	Heading */}
    {/* Search Input */}
    <label className="search-label" htmlFor="search-input">
      <input
        type="text"
        name="query"
        value={query}
        id="search-input"
        placeholder="Search..."
        onChange={this.handleOnInputChange}
      />
      <i className="fa fa-search search-icon" aria-hidden="true" />
    </label>

    {/*	Error Message */}
    {message && <p className="message">{ message }</p>}

    {/*	Loader */}
    <img src={Loader} className={`search-loading ${loading ? 'show' : 'hide'}`} alt="loader" />

    {/* Navigation */}
    <PageNavigation
      loading={loading}
      showPrevLink={showPrevLink}
      showNextLink={showNextLink}
    />

    {/*	Result */}
    { this.renderSearchResults() }

    {/* Navigation */}
    <PageNavigation
      loading={loading}
      showPrevLink={showPrevLink}
      showNextLink={showNextLink}
    />

  </div>
	  );
	}
}
