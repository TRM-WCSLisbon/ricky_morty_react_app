import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
// import { NavLink } from 'react-router-dom';
import querystring from 'query-string';
import CharacterCard from './CharactersCard';
import SearchBar from './SearchBar/SearchBar';
import API from '../API';
import {
  CardGrid, Card, Header, PageNumber,
} from './styles';

class CharacterList extends Component {
  state = {
    characters: [],
    currentPage: '',
  };

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    API
      .get(`/character/?page=${this.state.currentPage}`)
      .then((response) => {
        this.setState({
          pageCount: response.data.info.pages,
          characters: response.data.results,
        });
      });
  }

    searchCharacters = (event) => {
      const searchValue = event.target.value;

      API
        .get(`/character/?name=${searchValue}`)
        .then((response) => this.setState({ characters: response.data.results }));
    };

handlePageClick = (event) => {
  const selectedPage = event.selected;

  this.setState({
    currentPage: selectedPage,
  }, () => {
    this.getCharacters();
  });
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
        {/* {this.state.postData} */}
        {this.state.characters.map((character) => (
          <Card>
            <CharacterCard {...character} key={character.id} />
          </Card>
        ))}
      </CardGrid>
      <PageNumber>
        <ReactPaginate
          previousLabel="Prev"
          nextLabel="Next"
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
      </PageNumber>
    </div>
  );
}
}

export default withRouter(CharacterList);
