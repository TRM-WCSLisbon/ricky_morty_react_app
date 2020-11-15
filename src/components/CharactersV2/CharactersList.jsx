/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
// import ReactPaginate from 'react-paginate';
import queryString from 'query-string';
import CharacterCard from './CharactersCard';
import SearchBar from './SearchBar/SearchBar';
import API from '../API';
import {
  CardGrid, Card, Header, PageNumber,
} from './styles';

class CharacterList extends Component {
  state = {
    // offset: 0,
    // currentPage: 0,
    characters: [],
    page: null,
  };

  //   componentDidMount() {
  //     this.getCharacters();
  //   }
  componentDidMount() {
    const initialPage = Number(
      queryString.parse(this.props.location.search).page,
    );

    this.setState({ page: initialPage });

    this.getCharacters(initialPage);
  }

  componentDidUpdate() {
    const currentPage = Number(
      queryString.parse(this.props.location.search).page,
    );

    if (currentPage !== this.state.page) {
      this.getCharacters(currentPage);
      this.setState({ page: currentPage });
    }
  }

    getCharacters = () => {
      API
        .get(`/character?page=${currentPage}`)
        .then((response) => this.setState({ characters: response.data.results }));
    };
    // getCharacters = () => {
    //   API
    //     .get(`/character?page=${currentPage}`)
    //     .then((response) => {
    //       const page = response.data.info.pages;
    //       const characters = response.data.results;
    //       const slice = characters.slice(this.state.offset);
    //       const postData = slice.map((character) => (
    //         <CardGrid>
    //           <Card>
    //             <CharacterCard {...character} key={character.id} />
    //           </Card>
    //         </CardGrid>
    //       ));

    //       this.setState({
    //         pageCount: Math.ceil(page),

    //         postData,
    //       });
    //     });
    // };

// handlePageClick = (e) => {
//   const selectedPage = e.selected;
//   const offset = selectedPage;

//   this.setState({
//     currentPage: selectedPage,
//     offset,
//   }, () => {
//     this.getCharacters();
//   });
// };

  searchCharacters = (event) => {
    const searchValue = event.target.value;

    API
      .get(`/character/?name=${searchValue}`)
      .then((response) => this.setState({ characters: response.data.results }));
  };

  render() {
    return (
      <div>
        <Header>
          <header>
            <h1>
              Characters
            </h1>
            <SearchBar searchInputFunction={this.searchCharacters} />
          </header>
        </Header>
        <CardGrid>
          {this.state.characters.map((character) => (
            <Card>
              <CharacterCard {...character} key={character.id} />
            </Card>
          ))}
        </CardGrid>
        {/* {this.state.postData} */}
        {/* <PageNumber>
          <ReactPaginate
            previousLabel="prev"
            nextLabel="next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={this.state.pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={this.handlePageClick}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
          />
        </PageNumber> */}
      </div>
    );
  }
}

export default withRouter (CharacterList);
