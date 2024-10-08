import React, { useContext } from 'react';
import { useState } from 'react';
import { MovieContext } from "../Context/Movie.Context";
import PaymentModal from '../PaymentModal/Payment.Component';

const MovieInfo=()=>{
const { movie } = useContext(MovieContext);
const [isOpen,setIsOpen]=useState(false);
const [price, setprice] = useState(0);
const genres = movie.genres?.map(({ name }) => name).join(",");
const rentMovie=()=>{
    setIsOpen(true);
    setprice(149);
}
const buyMovie=()=>{
    setIsOpen(true);
    setprice(599);
}

    return (
      <>
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />;
        <div className="flex flex-col gap-8">
          <h1 className="text-white text-5xl font-bold">
            {movie.original_title}
          </h1>
          <div className="text-white flex flex-col gap-2">
            <h4>5K Rating</h4>
            <h4>Kannada,English,Hindi,Telegu</h4>
            <h4>
              {movie.runtime} min|{genres}
            </h4>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button onClick={rentMovie} className="bg-red-600 w-sm py-3 text-white font-semibold rounded-lg">
              Rent ₹ 149
            </button>
            <button onClick={buyMovie} className="bg-red-600 w-sm py-3 text-white font-semibold rounded-lg">
              Buy ₹ 599
            </button>
          </div>
        </div>
      </>
    );
}
export default MovieInfo