import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector, useCharacter } from "../Utils/hooks";
import Heading from "./heading";
import FormCard from "./formCard";

const Char = () => {
  const url = useAppSelector((state) => state.document.url);
  const selectedChar = useCharacter(url);
  console.log(selectedChar, "selectedChar");
  return (
    <Heading heading="Selected Character">
      <div className="px-4 sm:px-6 md:px-0 mt-6">
        <FormCard res={selectedChar} />
      </div>
    </Heading>
  );
};

export default Char;
