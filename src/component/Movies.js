import React from 'react';
import MoviesTable from './MoviesTable';
import InputBox from './InputBox';

function Movies() {
  return (
    <div>
      <InputBox></InputBox>
      <MoviesTable></MoviesTable>
        {/* <InputBox></InputBox>
        <MoviesTable></MoviesTable>
        <Pagenation></Pagenation> */}
    </div>
  );
}

export default Movies;