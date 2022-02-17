import React from 'react';
import Tile from '../../components/tile/Tile';

const TileList = ({ data }) => {
  //Render Tiles
  const tiles = data.map((item, index) => <Tile key={index} data={item} />);

  return <div>{tiles}</div>;
};

export default TileList;
