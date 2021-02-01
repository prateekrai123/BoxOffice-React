/* eslint-disable no-underscore-dangle */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
import ShowMainData from '../components/show/ShowMainData';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import Cast from '../components/show/Cast';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isLoading: false, error: null, show: action.show };
    }

    case 'FETCH_FAILED': {
      return { ...prevState, isLoading: false, error: action.error };
    }

    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

const Show = () => {
  const { id } = useParams();

  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;

    apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          const data = { type: 'FETCH_SUCCESS', show: results };
          dispatch({ data });
        }
      })
      .catch(err => {
        if (isMounted) {
          const data = { type: 'FETCH_FAILED', error: err.message };
          dispatch({ data });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log('show', show);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return (
    <div>
      <div>
        <ShowMainData
          image={show.image}
          name={show.image}
          rating={show.rating}
          summary={show.summary}
          tags={show.genres}
        />
        <div>
          <h2>Details</h2>
          <Details
            status={show.status}
            network={show.network}
            premiered={show.premiered}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={show._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={show._embedded.cast} />
        </div>
      </div>
      y
    </div>
  );
};

export default Show;
