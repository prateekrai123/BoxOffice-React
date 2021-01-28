import React from 'react';
import ActorCard from './ActorCard';
import NOT_FOUND_IMAGE from '../../images/not-found.png';

// eslint-disable-next-line
const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : NOT_FOUND_IMAGE}
          summary={person.summary}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
