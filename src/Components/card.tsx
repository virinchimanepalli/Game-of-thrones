/* eslint-disable jsx-a11y/anchor-is-valid */
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";
import { useHistory } from "react-router";
import { setURl } from "../redux/slices/document";
import { useAppDispatch } from "../Utils/hooks";
import { ICharacters } from "../Utils/utils";

const Card = ({ response }: { response: ICharacters }) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  return (
    <li className="relative cursor-pointer">
      <div
        style={{
          height: 270,
          width: 240,
        }}
        className="group relative block w-full h-full justify-center items-center bg-white border border-opacity-70 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-700 focus-within:ring-indigo-500 overflow-hidden shadow-lg rounded-xl hover:bg-gray-800 pb-2"
      >
        <div className="flex flex-col w-full h-full items-start justify-between">
          <h2 className="text-gray-700 pl-4 pt-4 mt-4 font-semibold capitalize mb-2 group-hover:text-white text-xl">
            {response.name === "" ? "Not mentioned" : response.name}
          </h2>

          <div className="flex flex-row w-full px-4 mt-4">
            <div className="text-base text-gray-700 w-1/2 flex-col">
              <div className="flex font-semibold capitalize group-hover:text-white text-lg">
                Culture
              </div>
              <div className="flex capitalize group-hover:text-white text-sm">
                {response.culture === "" ? "No Culture" : response.culture}
              </div>
            </div>
            <div className="text-base text-gray-700 pl-6 w-1/2 flex-col">
              <div className="flex font-semibold capitalize group-hover:text-white text-lg">
                Tv Series
              </div>
              <div
                className="flex capitalize group-hover:text-white text-sm"
                style={{ marginLeft: "30%" }}
              >
                {/* {score.reduce(reducer)} */}
                {response.tvSeries.length}
              </div>
            </div>
          </div>
        </div>

        <>
          {/* <div className="object-cover pointer-events-none group-hover:opacity-50 bg-gray-100" /> */}
          <div
            className="flex items-end justify-around opacity-0 gap-3 absolute top-20 right-0 left-0 p-4 group-hover:opacity-100"
            aria-hidden="true"
          >
            <div
              className=" bg-gray-100 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"
              onClick={() => {
                dispatch(setURl({ url: response.url }));
                history.push(`/character`);
              }}
            >
              View
            </div>
          </div>
        </>
      </div>
    </li>
  );
};

export default Card;
