import React from 'react';
import { useEffect, useState } from 'react';

function Genre() {
    const [isLoad, setLoad] = useState(true);
    const [content, setContent] = useState([]);

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
      <div className="mr-6 border-2 w-40 text-center h-10 font-bold"> All GENRES </div>
      {isLoad == true ?  <div >Loading...... </div> 
          : content.genres.map(function(genre){
            return(<div 
                className="mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold"> 
                {genre.name}
            </div>
            
            )})
        }
    </div>
  );
}

export default Genre;