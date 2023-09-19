'use client'
import { useState, useEffect } from "react";
import { getMovieDetails } from "@/app/utilities/getMovieDetails";
import { NEXT_PUBLIC_IMAGE_BASE_URL } from "@/app/config";

const MovieDetail = ({ params: { movieId } }: { params: { movieId: number } }) => {
    const [movieDetail, setMovieDetail] = useState<any>(null);
    useEffect(() => {
        (async () => {
            try {
                const movieDetailData = await getMovieDetails(movieId);
                setMovieDetail(movieDetailData);
            } catch (error) {
                console.error("Error fetching movie details:", error);
                console.log(movieDetail);

            }
        })();
    }, [movieId]);
    return (
        
        <div className="bg-black-100 px-20 py-10 rounded-lg shadow-md w-screen h-screen text-center mx-auto flex flex-col justify-center items-center">
        {movieDetail && (
            
          <div>
            <h1 className="text-yellow-500 text-4xl font-bold my-4  mt-1 mb-5"> Movie Details</h1>
            <img
              src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${movieDetail.poster_path}`} alt={movieDetail.title}
              className="mx-auto w-0.9/3"
            />
            <h2 className="text-xxl font-semibold">{movieDetail.title}</h2>
            <p className="text-gray-100 mx-20" >Overview: {movieDetail.overview}</p>
            <p className="text-gray-100">Release Date: {movieDetail.release_date}</p>
          </div>
            )}
            </div>
    );
}

export default MovieDetail;
