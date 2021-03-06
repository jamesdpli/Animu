
import React from 'react'
import EachGenreButton from './EachGenreButton'

function SearchByGenre({setSelectedGenre, genres}) {



    console.log(genres)

    const eachGenre = genres.map(genre => <EachGenreButton key= {genre.id} setSelectedGenre ={setSelectedGenre} genre = {genre}/>)

    

  return (
    <>
    <div className='genre-container'>
      <h2> Filter By Genre </h2>
      <div className='genre-lists'> {eachGenre} </div>
  
    </div>
   
    </>
  )
}

export default SearchByGenre