import React, { useState } from "react";
import { Button } from "../components/Button";
import { PlaceCard } from "../components/PlaceCard";
import { Place } from "../generated/graphql";
import {
  generateNonRepeatingNumber,
  notNegative,
} from "../helpers/NumberOperations";

interface VyletyProps {
  // data structure to store the fetched data
  data: Map<number, Place>;
}

export const Vylety: React.FC<VyletyProps> = ({ data }) => {
  // placeId to pass to the placeCard
  const [placeId, setPlaceId] = useState(-1); // on load negative = not valid index

  return (
    <div className="min-h-screen flex flex-col items-center bg-red-400">
      <img src="/assets/Header.svg" alt="Page logo" width="400" />
      <Button
        className="bg-green-600 text-white rounded-3xl text-lg"
        onClick={() =>
          // sets the placeId to the random number, max number = size of the data map
          setPlaceId(generateNonRepeatingNumber(placeId, data.size))
        }
        text="Najdi si výlet!"
      />
      {/* <Button onClick={() => setPlaceId(-1)} text="Vymazat" /> */}
      {/* if the placeId is negative empty return */}
      {notNegative(placeId) ? (
        <div></div>
      ) : (
        <PlaceCard
          placeName={data.get(placeId)!.name}
          imgSrc={data.get(placeId)!.imgSrc}
          description={data.get(placeId)!.description}
        />
      )}
    </div>
  );
};
