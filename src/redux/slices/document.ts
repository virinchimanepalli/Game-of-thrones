import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Character {
  url: string;
}

const initialState: Pick<Character, "url"> = {
  url: "",
};

export const CharacterSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    setURl: (state, action: PayloadAction<Character>) => {
      const { url } = action.payload;
      state.url = url;
    },
  },
});
export const { setURl } = CharacterSlice.actions;

export default CharacterSlice.reducer;
