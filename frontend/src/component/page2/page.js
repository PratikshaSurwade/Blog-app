import React from "react";
import { useState, useEffect } from 'react';
import Grid from "./components/elements/Grid";
import PetImage from "./components/elements/PetImage";
import LoadMore from "./components/elements/LoadMore";

const Main = () => {

    //state for img grid
    const [allPets, setAllPets] = useState([]);
    const [petCount, setPetCount] = useState(9);
  
    //load more pets
    //need to write a condtion allow more pets
    const loadMorePets = () => {
      setPetCount(allPets.length)
    };

    //fake api call
    useEffect(()=>{
        fetch('./petfinder.json')
          .then((res)=>res.json())
          .then((data)=>{
            // console.log(data); //test
            setAllPets(data)
          });
      },[])

  return (
    <div>
      <Grid text="Find your pet!" >
          {allPets.slice(0, petCount).map( (pet, id) => (
          <PetImage
            key={id} 
            pet={pet}
            petId={pet.id}
            clickable
          />))}
      </Grid>
      <LoadMore text="Load More" onClick={loadMorePets} />
    </div>
  );
};

export default Main;
