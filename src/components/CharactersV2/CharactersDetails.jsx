/* eslint-disable react/state-in-constructor */
import React, { Component } from "react";
import API from "../API";
import {
  CardDetails,
  CardGridDetails,
  HeaderDetails,
  Container,
} from "./styles";
import ArrowBack from "@material-ui/icons/ArrowBack";

class CharactersDetails extends Component {
  state = {
    character: [],
    // location:[],
    // origin:[],
  };

  componentDidMount() {
    this.getCharacter();
  }

  // componentDidUpdate (prevProps) {
  //     console.log('previous props', prevProps.match.params.id)
  //     console.log('current props', this.props.match.params.id)
  //     //     if(prevProps.match.params.id !== this.props.match.params.id) {
  //     //         const id = this.props.match.params.id
  //     //         this.getCharacter(id)
  //     //     }
  // }

  getCharacter() {
    API.get("/character").then((response) => {
      console.log(response.data);
      console.log(this.props.match.params.id);

      const selectId = Number(this.props.match.params.id);

      console.log(selectId);

      const character = response.data.results.filter(
        (character) => character.id === selectId
      );

      console.log("character", character[0]);

      this.setState({
        character: character[0],
      });
    });
  }
  // getCharacter() {
  //   API.get("/character").then((response) => {
  //     console.log(response.data);
  //     console.log(this.props.match.params.id);

  //     const selectId = Number(this.props.match.params.id);

  //     console.log(selectId);

  //     // const character = response.data.results.filter(
  //     //   (character) => character.id === selectId,
  //     // );

  //     // console.log("character", character[0]);

  //     const { ...character } = response.data.results[0].location;

  //     const location = [];

  //     for (let key in character) {
  //       location.push(character[key]);
  //     }

  //     console.log(location[0]);

  //     // const { ...character } = response.data.results[0].origin;

  //     // this.setState({
  //     //   character: character[0],
  //     //   location: location[0],
  //     // });
  //   });
  // }

  // setDisplayEpisodes(id) {
  //   getCharacter(
  //     characters.map((char) =>
  //       char.id === id
  //         ? { ...char, displayEpisodes: !char.displayEpisodes }
  //         : char
  //     )
  //   );
  // }
  //     useEffect(() => {
  //       window.scrollTo(250, 250)
  //   }, [props.match])

  render() {
    return (
      <div>
        <HeaderDetails> 
           <div className="IconBack">
           <Link to={`/characters`}>
             <ArrowBack fontSize="large" /> Go Back to List
          </Link>
         </div>
          <header>
            {/* <h1>Character Details</h1> */}
            <h1>{this.state.character.name}</h1>
          </header>
        </HeaderDetails>
      
        <Container>
          <CardGridDetails>
            <CardDetails>
              <div>
                <div className="column-left">
                  <img
                    src={this.state.character.image}
                    alt={this.state.character.name}
                  />
                </div>
                <div className="column-right">
                  {/* <h1>Name: {this.state.character.name}</h1> */}
                  <ul>
                    <li>
                      <h3>Species:</h3>{" "}
                      <span>{this.state.character.species}</span>
                    </li>
                    <li>
                      <h3>Status:</h3>{" "}
                      <span>{this.state.character.status}</span>
                    </li>
                    <li>
                      <h3>Gender:</h3>{" "}
                      <span>{this.state.character.gender}</span>
                    </li>
                    <li>
                      <h3>Origin:</h3>{" "}
                      {[this.state.character.origin].map(
                        (el) => console.log(el)
                        // <span>{el.name}</span>
                      )}
                    </li>
                    <li>
                      <h3>Location:</h3>{" "}
                      {[this.state.character.location].map(
                        (el) => console.log(el)
                        // <span>{el.name}</span>
                      )}
                    </li>
                  </ul>
                </div>
                {/* <div
                    onClick={() => setDisplayEpisodes(this.state.character.id)}
                    displayEpisodes={this.state.character.displayEpisodes}
                  >
                    Episodes List
                  </div> */}
              </div>
            </CardDetails>
          </CardGridDetails>
        </Container>
      </div>
    );
  }
}
export default CharactersDetails;

// const VegeDetails = (props) => {
//     // const [goods, setGoods] = useState([]);
//     const [good, setGoodsId] = useState([]);

//     useEffect(() => {
//       axios
//         .get(`https://run.mocky.io/v3/fa107af3-65bc-406c-830e-1003fd542f0c`)
//         .then((response) => {
//           console.log(props.match);
//           const selectId = Number(props.match.params.id);

//           console.log(selectId);

//           const good = response.data.results.filter(
//             (good) => good.id === selectId
//           );
//           // good.id === selectId)

//           console.log("good", good[0]);

//           setGoodsId(good[0]);
//         });
//     }, [props.match]);

//     useEffect(() => {
//       window.scrollTo(250, 250)
//     }, [props.match])
//     // useEffect(() => {
//     //   const selectSpecs =
//     // }, [])
//     // class VegeDetails extends Component {
//     //   state = {
//     //     good: {},
//     //   };
//     //   componentDidMount() {
//     //     this.fetchGoods();
//     //   }

//     return (
//       <div className="Vege-details col-12 justify-content-center">
//         <div >
//         <div className="IconBack col-12 d-flex justify-content-end">
//           <Link to={`/vegetables`}>
//             <ArrowBack fontSize="large" /> Go Back to List
//           </Link>
//         </div>
//         <div className="CardDetails col-12 justify-content-center">
//         <div>
//           <div key={good.id}>
//             <h2>{good.name}</h2>
//             <img src={good.image} alt={good.name}/>
//             <div className="CardContent">
//               <p>
//                 <strong>Species:</strong> {good.species}
//               </p>
//               <p>
//                 <strong>Growth:</strong> {good.growth}
//               </p>
//               <p>
//                 <strong>Season: </strong>
//                 {good.season}
//                  {/* &nbsp;&nbsp; - &nbsp;&nbsp;{" "} */}

//               </p>
//               <p><strong>Harvest:</strong> {good.harvest}</p>
//             </div>
//           </div>
//           </div>
//         </div>
//         </div>
//         {/* <div>
//             map cards with same species
//             {good.map((species)=> good.species === selectSpecs)}
//           </div> */}
//       </div>
//     );
//   };
//   // }

//   export default VegeDetails;
