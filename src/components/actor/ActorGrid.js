import React from 'react';
import ActorCard from './ActorCard';

// eslint-disable-next-line
const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard key={person.id} id={person.id} name={person.name} />
      ))}
    </div>
  );
};

export default ActorGrid;
