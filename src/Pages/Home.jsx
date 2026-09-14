import MovieCard from "../Components/MovieCard";
import { useState } from "react";
import "../css/Home.css"

function Home(){

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: "1", title: "Home Alone", release_date: "2009"},
        {id: "2", title: "Die Hard", release_date: "1999"},
        {id: "3", title: "The Terminator", release_date: "1998"},
        {id: "4", title: "BumbleBee", release_date: "2013"},
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    }

    return <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search movie..." 
                className="search-input" value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movies.id}/>
            ))} 
            </div>
        </div> 
}

export default Home;