/* eslint-disable max-len */
import React from 'react';
import char from './char.gif';
import loc from './loc.gif';
import epi from './epi.gif';
import cont from './phone.gif';
import { Header, CardGrid } from './styles';

function Gallery() {
  return (
    <div>
      <Header>
        <span>
          After going missing for nearly 20 years, Rick Sanchez suddenly arrives
          at his daughter Beth’s doorstep looking to move in with her and her
          family. Beth welcomes him with open arms, but her unremarkable husband
          Jerry isn’t too thrilled about the tearful reunion as Rick’s arrival
          serves to shake things up quite a bit around the household. Rick
          converts the garage into his personal laboratory and gets to work on
          all sorts of dangerous sci-fi gadgets and contraptions. That wouldn’t
          be so bad if not for the fact that Rick continues to involve his
          grandchildren Morty and Summer in his insane adventures.
        </span>
      </Header>
      <CardGrid>
        <div id="container">
          <img src={char} alt="characters" />
          <div id="middle">
            <p>Characters</p>
          </div>
        </div>
        <div id="container">
          <img src={loc} alt="locations" />
          <div id="middle">
            <p>Locations</p>
          </div>
        </div>
        <div id="container">
          <img src={epi} alt="episodes" />
          <div id="middle">
            <p id="back">Episodes</p>
          </div>
        </div>
        <div id="container">
          <img src={cont} alt="contact" />
          <div id="middle">
            <p id="back">Contact Us</p>
          </div>
        </div>
      </CardGrid>
    </div>
  );
}

export default Gallery;
