import { useEffect, useState } from "react";
import { getGenres } from "../utilities/utils";
import { NEXT_PUBLIC_IMAGE_BASE_URL } from "@/app/config";
import Link from "next/link";
import { getMovies } from "@/app/utilities/getMovies";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
}

export default function GenreList() {
  const [genres, setGenres] = useState<Genre[] | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<number| null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreData = await getGenres();
        setGenres(genreData.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    const fetchMovies = async () => {
      try {
        const movieData = await getMovies();
        setMovies(movieData.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchGenres();
    fetchMovies();
  }, []);

  const handleClick = (genreId: number) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies = selectedGenre
  ? (movies || []).filter((movie) => movie.genre_ids.includes(selectedGenre))
  : movies || [];


  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2">
        {genres &&
          genres.map((genre) => (
            <div
              key={genre.id}
              className={`bg-gray-400 px-4 py-2 rounded-full cursor-pointer ${
                selectedGenre === genre.id ? "bg-yellow-500" : ""
              }`}
              onClick={() => handleClick(genre.id)}
            >
              {genre.name}
            </div>
          ))}
      </div>
      <div className="grid grid-cols-5 gap-4 mt-10">
        {filteredMovies?.map((movie) =>{
        return (
          <Link href={`/movie/${movie.id}`} key={movie.title}>
            <div key={movie.id} className="">
              <img
                src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto"
              />
            </div>
          </Link>
        )})}
      </div>
    </div>
  );
}
