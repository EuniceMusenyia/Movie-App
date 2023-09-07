'use client'
import { useState, useEffect } from "react"
import { getMovies } from "@/app/utilities/getMovies";
import { IMAGE_BASE_URL } from "@/app/config";
console.log (('IMAGE_BASE_URL'));


interface MovieProps{
  id: number;
  title: string;
  genre_ids: number[];
  poster_path:string
}

export default function Movies () {

    const [movies, setMovies] = useState <MovieProps[]>();
  
    useEffect (()=>{
      (async()=>{
        const movies = await getMovies();
        setMovies(movies)
        console.log({movies});
        
      })();
  
    }, [])
    return (
      <main className="p-2">
        <div className="grid grid-cols-4 gap-4">
        {movies?.map((item)=>(
          <div key= {item.id}>
            <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} />
            
          </div>
        ))}
        </div>
      </main>
  
    );
  }

