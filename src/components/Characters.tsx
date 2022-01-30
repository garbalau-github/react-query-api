import React, { useState } from 'react';
import Character from './Character';
import { useQuery } from 'react-query';

const Characters = () => {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }: any) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}` // Array
    );
    return response.json();
  };

  // Each 'character' will have unique key (page)
  const { data, isLoading, isError, isPreviousData } = useQuery(
    ['characters', page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className='characters'>
      {data.results.map((character: any) => {
        return <Character key={character.id} character={character} />;
      })}
      <div>
        <button
          onClick={() => setPage((oldValue) => oldValue - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((oldValue) => oldValue + 1)}
          disabled={isPreviousData && !data.info.next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;
