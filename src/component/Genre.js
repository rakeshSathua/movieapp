import React from 'react';
import { useEffect, useState } from 'react';

function Genre(props) {
    const [isLoad, setLoad] = useState(true);
    const [content, setContent] = useState([]);
    const sendGenre =(e) => {
      props.setGlobalGenre(e.target.textContent );
    };

    useEffect(async function() {
        let response  = await fetch('https://react-backend101.herokuapp.com/genres');
        //let response  = await fetch('');
        console.log(" before val of response "+ response);
        response  = await response.json();

        setLoad(false);
        setContent(response);
        console.log("val of response "+ response);


        }, [] )
  return (
    <div>
      <div className="mr-6 border-2 w-40 text-center h-10 font-bold" onClick={sendGenre}>All GENRES</div>
      {isLoad == true ?  <div >Loading...... </div> 
          : content.genres.map(function(genre){
            return(<div 
                className="mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold" onClick={sendGenre}> 
                {genre.name}
            </div>
            
            )})
        }
    </div>
  );
}

export default Genre;