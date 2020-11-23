/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import API from '../API';
// import {
//   CardGrid, Card, Header,
// } from './styles';

class CharactersDetails extends Component {
    state = {
      character: [],
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
      API
        .get(`/character`)
        .then((response) => {
          console.log(response.data);
          console.log(this.props.match.params.id);

          const selectId = Number(this.props.match.params.id);

          console.log(selectId);

          const character = response.data.results.filter(
            (character) => character.id === selectId,
          );

          console.log('character', character[0]);

          this.setState({
            character: character[0],
          });
        });
    }

    render() {
      return (
        <div>
          <h1>{this.state.character.name}</h1>
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
