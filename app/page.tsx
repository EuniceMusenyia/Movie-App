import Movies from "./components/movies"
// import { useState, useEffect } from "react"



export default function Home () {
  return(
    <main className="h-screen-full bg-white text-black">
    <Movies/>
    </main>
    

  )
  
}
// 'use client';
// import { useState, useEffect } from "react"
// import { getMovies } from "./utilities/getMovies"
// import { IMAGE_BASE_URL } from "./config";


// interface MovieProps{
//   id: number;
//   title: string;
//   genre_ids: number[];
//   poster_path:string
// }

// export default function Home() {
//   const [movies, setMovies] = useState <MovieProps[]>();

//   useEffect (()=>{
//     (async()=>{
//       const movies = await getMovies();
//       setMovies(movies)
//       console.log({movies});
      
//     })();

//   }, [])
//   return (
//     <main className="p-2">
//       <div className="grid grid-cols-4 gap-4">
//       {movies?.map((item)=>(
//         <div key= {item.id}>
//           <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} />
          
//         </div>
//       ))}
//       </div>
//     </main>

//   );
// }
