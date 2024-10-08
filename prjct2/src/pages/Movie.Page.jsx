import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MovieLayoutHoc from '../layouts/Movie.layout';
import axios from 'axios';
import { MovieContext } from '../components/Context/Movie.Context';
import Slider from 'react-slick';
import { FaCcVisa, FaCcApplePay } from 'react-icons/fa';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import MovieHero from '../components/MovieHero/MovieHero.Component';
import Cast from '../components/Cast/Cast.Component';

const MoviePage = (props) => {
  const { posters, title, subtitle, isDark, config } = props;
  
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);
  
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);

  const settingsCast = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 5,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 5,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-full">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the Movie</h1>
          <p>{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-4">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 font-bold text-xl">
                  Visa Stream Offers
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all Rupay Card* on BookMyShow Stream
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-4">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 font-bold text-xl">Film Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all Rupay Card* on BookMyShow Stream
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h1 className='font-bold text-2xl'>Cast & Crew</h1>
          <Slider {...settingsCast}>
            {cast.map((castData) => (
              <Cast
                
                key={castData.id}
                image={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
              />
            ))}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <PosterSlider
            config={settings}
            title="BMS XCLUSIVE"
            posters={similarMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);
