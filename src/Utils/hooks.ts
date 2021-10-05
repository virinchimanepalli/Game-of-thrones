import { url } from "inspector";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import { ICharacters } from "./utils";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCharacter = (
  url: ICharacters["url"]
): ICharacters | undefined => {
  return useAppSelector(
    (state) => state.characters.characters.filter((c) => c.url === url)[0]
  );
};
