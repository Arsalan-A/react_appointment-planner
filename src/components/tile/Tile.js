import React from 'react';

const Tile = ({ data }) => {
  //Extract values from the object
  const extractData = Object.values(data);

  //Skip the first item in the data and iterate over the rest
  const renderData = extractData.slice(1).map((item, index) => (
    <p key={index} className='tile'>
      {item}
    </p>
  ));

  return (
    <div className='tile-container'>
      <p className='tile-title'>{extractData[0]}</p>
      {renderData}
    </div>
  );
};

export default Tile;
