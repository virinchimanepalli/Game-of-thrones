/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ICharacters } from "../Utils/utils";
import Card from "./card";
import Heading from "./heading";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppDispatch, useAppSelector } from "../Utils/hooks";
import { addMultipleCharacters } from "../redux/slices/characters";
// import { v4 as uuidv4 } from 'uuid';

const Tests = () => {
  const dispatch = useAppDispatch();
  const chars = useAppSelector((state) => state.characters.characters);
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getCharactersData = async (pageNumber: number) => {
    const res = await fetch(
      `https://www.anapioficeandfire.com/api/characters?page=${pageNumber}&pageSize=10`
    );
    const data = await res.json();
    if (data.length < 9) {
      setHasMore(false);
    }
    dispatch(addMultipleCharacters(data));
    setCharacters([...characters, ...data]);
  };

  const fetchMoreData = () => {
    setPage(page + 1);
    getCharactersData(page + 1);
  };

  useEffect(() => {
    setPage(1);
    getCharactersData(1);
  }, []);
  return (
    <>
      <Heading heading="Characters">
        <div className="px-4 sm:px-6 md:px-0 mt-6">
          {characters.length > 0 ? (
            <InfiniteScroll
              next={fetchMoreData}
              dataLength={characters.length}
              hasMore={hasMore}
              style={{ overflow: "hidden" }}
              loader={<>Loading more</>}
            >
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
              >
                {characters.map((res) => {
                  return (
                    <div>
                      <Card response={res} />
                    </div>
                  );
                })}
              </ul>
            </InfiniteScroll>
          ) : null}
          {/* </ui> */}
          {/* {characters.map((res) => {
              return (
                <>
                  <Card response={res} />
                </>
              );
            })} */}
        </div>
      </Heading>
    </>
  );
};

export default Tests;
