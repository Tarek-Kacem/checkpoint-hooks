import "./App.css";
import MovieList from "./componenets/MovieList";
import Filter from "./componenets/Filter";
import AddMovie from "./componenets/AddMovie";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [ftext,setFtext] = useState("")
  const [frate,setFrate] = useState(1)
  const [movies, SetMovies] = useState([
    {
      id: uuidv4(),
      title: "The pursuit of happiness",
      description:
        "American biographical drama film directed by Gabriele Muccino and starring Will Smith.",
      posterURL:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTm0Qz4R7uV295Kk4SbdbxUBWnkqkQdpDZVaatd7m_5zYlXsWYK",
      rate: 4,
    },
    {
      id: uuidv4(),
      title: "The social dilemma",
      description:
        "American docudrama film directed by Jeff Orlowski and written by Orlowski, Davis Coombe.",
      posterURL:
        "https://miro.medium.com/max/3840/1*ijRQhopKew_RB358PA9-yA.jpeg",
      rate: 3.8,
    },
    {
      id: uuidv4(),
      title: "The simpsons movie",
      description:
        "American animated comedy film based on the long-running animated sitcom The Simpsons.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/a/a0/Simpsons_final_poster.png",
      rate: 3.7,
    },
  ]);
  const addMovie = (newMovie) => SetMovies([...movies, newMovie]);
  const deleteMovie = (id) => SetMovies(movies.filter((el) => el.id !== id));
  return (
    <div className="App">
      <header className="App-header">
        <Filter setftext={setFtext} setfrate={setFrate}/>
        <MovieList
          deleteMovie={deleteMovie} 
          movies={movies.filter((el) => el.title.includes(ftext) && el.rate >= frate)}
        />
        <AddMovie addMovie={addMovie} />
      </header>
    </div>
  );
}

export default App;
