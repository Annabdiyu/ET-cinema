import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home(){
    const [searchQuery,setSearchQuery]=useState("")
    const movies=[
        {id:1, title:"John Wick", release_date:"2020"},
        {id:2, title:"Terminator", release_date:"1999"},
        {id:3, title:"The Matrix", release_date:"1998"},
    ]
    const handleSearch= (e) =>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("----------------")

    }

    return <div className="home">
        <form onSubmit={handleSearch} ClassName="search-form">
            <input type="text" placeholder="serach for movies...." 
            ClassName="search-input"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            />
            <button type="submit" ClassName="search-button">Search</button>
        </form>

        <div ClassName="movies-grid">
            {movies.map(movie=> (
        
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
}

export default Home