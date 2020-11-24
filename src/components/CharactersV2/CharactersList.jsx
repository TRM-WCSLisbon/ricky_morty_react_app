/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { withRouter, NavLink as Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
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
    currentPage: 1,
    pageCount: '',
    // next:'',
    // prev:'',
    //page:null,
  };

  // componentDidMount() {
  //   const initialPage = console.log(this.props)
  //   console.log(location.search);
  //   console.log(querystring.parse(this.props.location.search).page);
  //   Number(
  //     querystring.parse(this.props.location.search).page,
  //   );
  //   //this.setState({ page: initialPage });
  //   // console.log(this.state.page);
  //   // console.log(currentPage);
  //   // console.log(this.props);
  //   this.getCharacters(initialPage);
  // }

  // componentDidUpdate(prevProps) {
  //   console.log(this.prevProps)
  //   // console.log(this.props)
  //   const currentPage = Number(
  //     querystring.parse(this.props.location.search).page,
  //   );
  //   const prevPage = Number(querystring.parse(prevProps.location.search).page);
  //   if (prevPage !== currentPage) {
  //     console.log("buhh");
  //     this.getCharacters(currentPage);
  //   }
  //   // console.log(currentPage);
  // }

  componentDidMount() {
    this.getCharacters();
  }
  componentDidUpdate(){
    window.scrollTo(230, 230);
  }

  getCharacters(currentPage) {
    API
      .get(`/character?page=${currentPage}`)
      // .get(`/character`)

      .then((response) => {
        console.log(response.data)
        console.log(this.props.match);

        // console.log(this.props.match.params)
        this.setState({
        //   currentPage: response.match.param.page,
          pageCount: response.data.info.pages,
          characters: response.data.results,
          // next:response.data.info.next,
          // prev:response.data.info.prev,
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
      const selectedPage = event.selected + 1;
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
              // previousLinkClassName={this.state.prev}
              // nextLinkClassName={this.state.next}
              // disabledClassName={"pagination__link--disabled"}
              // activeClassName={"pagination__link--active"}
              containerClassName="pagination"
              subContainerClassName="pages pagination"
              activeClassName="active"
            />
          </PageNumber>
          <CardGrid>
            {this.state.characters.map((character) => (
              <Link to={`/characters/${character.id}`}>
                <Card>
                  <CharacterCard {...character} key={character.id} />
                </Card>
              </Link>

            ))}
          </CardGrid>
          {/* <PageNumber>
            <ReactPaginate
              previousLabel="Prev"
              nextLabel="Next"
              breakLabel="..."
              breakClassName="break-me"
              pageCount={this.state.pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={this.handlePageClick}
              // previousLinkClassName={this.state.prev}
              // nextLinkClassName={this.state.next}
              // disabledClassName={"pagination__link--disabled"}
              // activeClassName={"pagination__link--active"}
              containerClassName="pagination"
              subContainerClassName="pages pagination"
              activeClassName="active"
            />
          </PageNumber> */}
        </div>
      );
    }
}

export default withRouter(CharacterList);
