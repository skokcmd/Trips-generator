import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface PlaceCardProps {
  placeName: string; // name of the place
  imgSrc: string;
  description: string;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({
  placeName,
  imgSrc,
  description,
}) => {
  return (
    <div className="bg-white flex flex-col px-5 mx-5 my-10 rounded-3xl lg:w-2/6 ">
      {/* place header */}
      <header>
        <h1 className="text-gray-800 text-2xl self-start py-3 px-1">
          {placeName}
        </h1>
      </header>
      {/* place info */}
      {/* <pre>{data.singlePlace.id}</pre> */}
      <figure>
        {/* place img */}
        <LazyLoadImage alt="place-img" src={imgSrc} width="600" />
        {/* <img src={imgSrc} alt="test-img" /> */}
        <figcaption className="py-3">{description}</figcaption>
      </figure>
    </div>
  );
};
