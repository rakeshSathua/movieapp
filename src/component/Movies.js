import React from 'react';
import MoviesTable from './MoviesTable';
import InputBox from './InputBox';

function Movies(props) {
  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setMovieCount] = React.useState(9);

  const setGlobalSearchText = (searchText) => {
    //console.log("movies : " + searchText);
    setSearchText(searchText);
  }

  const setGlobalCount = (moviesCount) => {
    //console.log("movies : " + searchText);
    setMovieCount(moviesCount);
  }
  return (
    <div>
      <InputBox
        setGlobalSearchText ={setGlobalSearchText}
        setGlobalCount = {setGlobalCount}
      ></InputBox> 
      <MoviesTable
        searchText={searchText}
        moviesCount={moviesCount}
        cGenre={props.cGenre}

      ></MoviesTable>
        {/* <InputBox></InputBox>
        <MoviesTable></MoviesTable>
        <Pagenation></Pagenation> */}
    </div>
  );
}

export default Movies;