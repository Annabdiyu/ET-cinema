import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies,getpopularMovies } from "../services/api"

function Home(){
    const [searchQuery,setSearchQuery]=useState("")
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null)
    


    useEffect(() => {
        const loadPopularMovies = async() => {
            try {
                const popularMovies = await getpopularMovies()
                setMovies(popularMovies)
            } catch(err){}
            finally{}
        }
    },[])

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