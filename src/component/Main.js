import Genre from './Genre'
import Movies from './Movies';
import React, { useEffect } from 'react';

function Main() {
  const[cGenre, setGenre] = React.useState("");
  //const [cPage, setcPage] = React.useState(1);

  const setGlobalGenre = (nGenre) => {
    if (nGenre == "All GENRES"){
      setGenre("")
    } else {
      setGenre(nGenre);
    } 
  }  
  
  return (
  <>
      <div className='flex mr-2 px-3'>
          
          <Genre setGlobalGenre={setGlobalGenre}></Genre>
          <Movies cGenre={cGenre}></Movies>


          {/* <Genre setGlobalGenre={setGlobalGenre}></Genre>
          <Movies
            cGenre={cGenre}
            cPage={cPage}
            setcPage={setcPage}
          
          ></Movies> */}
      </div>
    </>

  );
}

export default Main;