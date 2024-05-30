import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Wildfire } from "../../../App";

export interface WildfireState {
  selected: Wildfire | null;
}

const initialState: WildfireState = {
  selected: null,
};

export const wildfireSlice = createSlice({
  name: "wildfire",
  initialState,
  reducers: {
    selectedChanged: (state, action: PayloadAction<Wildfire | null>) => {
      state.selected = action.payload;
    },
  },
});

export const { selectedChanged } = wildfireSlice.actions;
