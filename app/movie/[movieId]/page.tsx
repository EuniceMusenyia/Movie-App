'use client'
import { useState, useEffect } from "react";
import { getMovieDetails } from "@/app/utilities/getMovieDetails";
import { NEXT_PUBLIC_IMAGE_BASE_URL } from "@/app/config";

const MovieDetail = ({ params }) => {
  const { movieId } = params;
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const movieDetailData = await getMovieDetails(movieId);
        setMovieDetail(movieDetailData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  return (
    <div className="bg-black px-20 py-10 rounded-lg shadow-md w-screen h-screen text-center mx-auto flex flex-col justify-center items-center overflow-x-hidden">
      {movieDetail && (
        <div>
          <h1 className="text-yellow-500 text-4xl font-bold my-4 mt-4 mb-5">Movie Details</h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src={NEXT_PUBLIC_IMAGE_BASE_URL + movieDetail.poster_path}
                alt={movieDetail.title}
                className="mx-auto w-3/4"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold">{movieDetail.title}</h2>
              <p className="text-gray-100 text-lg leading-7 mt-4">{movieDetail.overview}</p>
              <p className="text-gray-100 mt-4">Release Date: {movieDetail.release_date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
