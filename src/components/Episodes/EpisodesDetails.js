// import React from "react";
// // import { Link } from "react-router-dom";
// import { NavLink as Link } from "react-router-dom";
// // import ArrowBack from "@material-ui/icons/ArrowBack";
// import API from "../API";
// import {
//   HeaderDetails,
//   Container,
//   CardGridDetails,
//   CardDetails,
//   // Characters,
// } from "./styles";
// import EpisodeImg from "./image.png";
// import Characters from "../Characters/Characters";

// class EpisodesDetails extends React.Component {
//   state = {
//     episode: {},
//     character: [],
//   };

//   componentDidMount() {
//     this.getEpisodes();
//     this.getCharacters();
//     console.log("hello");
//   }

//   componentDidUpdate(prevProps) {
//     console.log(prevProps);
//     if (prevProps.match.params.id !== this.props.match.params.id) {
//       this.getEpisodes();
//     }
//   }

//   getEpisodes = () => {
//     const episodeId = Number(this.props.match.params.id);
//     //console.log(this.props);
//     // console.log(episodeId);
//     API.get(`/episode/${episodeId}`).then(
//       (response) =>
//         //console.log(response.data)
//         this.setState({ episode: response.data })
//       //console.log(this.state.episode)
//     );
//   };

//   getCharacters = () => {
//     const currentEpisodeId = Number(this.props.match.params.id);
//     API.get(`/episode/${currentEpisodeId}`).then(
//       (response) => (
//         // console.log(response)
//         console.log(typeof response.data.characters, response.data.characters),
//         response.data.characters
//           .map(
//             (chr) =>
//               // console.log(typeof chr, chr)))
//               chr.split("/character/")[1]
//           )
//           .map((chr) =>
//             // console.log(chr);
//             // <li key={chr}>{chr}</li>;

//             this.setState({ character: [...this.state.character, chr] })
//           )
//       )
//     );
//   };

//   render() {
//     const { name, air_date, episode, created } = this.state.episode;

//     // const { characters, episode } = this.state;

//     return (
//       <div>
//         <HeaderDetails>
//           <header>
//             <div className="IconBack">
//               <Link to="/episodes">
//                 <ArrowBack style={{ fontSize: 60 }} />
//               </Link>
//             </div>
//             <h1>{this.state.episode && name}</h1>
//           </header>
//         </HeaderDetails>
//         <Container>
//           <CardGridDetails>
//             <CardDetails>
//               <div>
//                 <div className="column-left">
//                   <img
//                     src={this.state.episode && EpisodeImg}
//                     alt={this.state.episode && name}
//                   />
//                 </div>
//                 <div className="column-right">
//                   {/* <h1>Name: {this.state.episode.name}</h1> */}
//                   <ul>
//                     <li>
//                       <h3>Episode:</h3>{" "}
//                       <span>{this.state.episode && episode}</span>
//                     </li>
//                     <li>
//                       <h3>Air Date:</h3>{" "}
//                       <span>{this.state.episode && air_date}</span>
//                     </li>
//                     {/* <li>
//                       <h3>URL:</h3> <span>{this.state.episode && url}</span>
//                     </li> */}
//                     <li>
//                       <h3>Created Date:</h3>{" "}
//                       <span>{this.state.episode && created}</span>
//                     </li>
//                     <li>
//                       <h3>Characters: </h3>{" "}
//                       <span>
//                         {this.state.character &&
//                           this.state.character.map((char) => (
//                             <li>
//                               <Link to={`/episodes/${char}`}>{char}</Link>
//                             </li>
//                           ))}
//                       </span>
//                     </li>
//                   </ul>
//                   {/* <button>
//                     <Link to="/episodes">Return to Episodes</Link>
//                   </button> */}
//                 </div>
//               </div>
//             </CardDetails>
//           </CardGridDetails>
//         </Container>
//       </div>
//     );
//   }
// }

// export default EpisodesDetails;

/* eslint-disable react/state-in-constructor */
import React from "react";
import API from "../API";
import { Link } from "react-router-dom";
import {
  HeaderDetails,
  Container,
  CardGridDetails,
  CardDetails,
} from "./styles";
import EpisodeImg from "./image.png";

class EpisodesDetails extends React.Component {
  state = {
    episode: {},
    character: [],
  };

  componentDidMount() {
    this.getEpisodes();
    this.getCharacters();
    // console.log(this.state.location);
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getEpisodes();
    }
  }

  getEpisodes = () => {
    const episodeId = Number(this.props.match.params.id);
    // console.log(this.props);
    // console.log(episodeId);
    API.get(`/episode/${episodeId}`).then(
      (response) => this.setState({ episode: response.data })
      // console.log(this.state.episode)
    );
  };

  getCharacters = () => {
    const episodeId = Number(this.props.match.params.id);
    API.get(`/episode/${episodeId}`).then(
      (response) => (
        console.log(typeof response.data.characters, response.data.characters),
        response.data.characters
          .map((char) => char.split("character/")[1])
          .map((char) =>
            this.setState({ character: [...this.state.character, char] })
          )
      )
    );
  };

  render() {
    return (
      <div>
        <HeaderDetails>
          <button>
            <Link to={`/episodes?page=1`}>Go back</Link>
          </button>
          <header>
            <h1>{this.state.episode && this.state.episode.name}</h1>
          </header>
        </HeaderDetails>
        <Container>
          <CardGridDetails>
            <CardDetails>
              <div>
                <div className="column-left">
                  <img
                    src={this.state.episode && EpisodeImg}
                    alt={this.state.episode && name}
                  />
                </div>
                <div className="column-right">
                  {/* <h1>Name: {this.state.episode.name}</h1> */}
                  <ul>
                    <li>
                      <h3>Episode:</h3>{" "}
                      <span>
                        {this.state.episode && this.state.episode.episode}
                      </span>
                    </li>
                    <li>
                      <h3>Air Date:</h3>{" "}
                      <span>
                        {this.state.episode && this.state.episode.air_date}
                      </span>
                    </li>
                    {/* <li>
                      <h3>URL:</h3> <span>{this.state.episode && url}</span>
                    </li> */}
                    <li>
                      <h3>Created Date:</h3>{" "}
                      <span>
                        {this.state.episode && this.state.episode.created}
                      </span>
                    </li>
                    <li>
                      <h3>Characters: </h3>{" "}
                      <span>
                        {this.state.character &&
                          this.state.character.map((char) => (
                            <li>
                              <Link to={`/episodes/${char}`}>{char}</Link>
                            </li>
                          ))}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardDetails>
          </CardGridDetails>
        </Container>
      </div>
    );
  }
}

export default EpisodesDetails;
