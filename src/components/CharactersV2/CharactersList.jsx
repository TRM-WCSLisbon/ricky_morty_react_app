/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { withRouter, NavLink as Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

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
    pageCount: '',
    // page:null,
  };

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters(currentPage) {
    API
      .get(`/character/?page=${currentPage}`)
      // .get(`/character`)

      .then((response) => {
        // console.log(response.data.info)
        // console.log(this.props.match);

        // console.log(this.props.match.params)
        this.setState({
        //   currentPage: response.match.param.page,
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
      console.log(selectedPage);

      this.setState({
        currentPage: selectedPage,
      },
      () => {
        this.getCharacters(this.state.currentPage);
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
            {this.state.characters.map((character) => (
              <Link to={`/characters/${character.id}`}>
                <Card>
                  <CharacterCard {...character} key={character.id} />
                </Card>
              </Link>
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
