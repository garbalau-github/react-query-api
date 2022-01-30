import React from 'react';

const Character = ({ character }: any) => {
  return (
    <div className='card'>
      <img src={character.image} alt={character.name} />
      <div className='text-container'>
        <h3>{character.name}</h3>
        <p className='status'>
          {character.status} - {character.species}
        </p>
        <p className='title'>Last seen on</p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
};

export default Character;
