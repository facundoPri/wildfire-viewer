import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Confidence } from "../../../utils/satelliteConf";

export interface FiltersState {
  date: string;
  hour: string;
  visibleConfidences: Confidence[];
}

const initialState: FiltersState = {
  date: "2023-01-01",
  hour: "01",
  visibleConfidences: [
    Confidence.ProbabilidadAlta,
    Confidence.ProbabilidadMedia,
    Confidence.ProbabilidadBaja,
    Confidence.Procesado,
    Confidence.Saturado,
    Confidence.ContaminadoPorNubes,
  ],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    dateChanged: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    hourChanged: (state, action: PayloadAction<string>) => {
      state.hour = action.payload;
    },
    confidenceToggled: (state, action: PayloadAction<Confidence>) => {
      const index = state.visibleConfidences.indexOf(action.payload);
      if (index === -1) {
        state.visibleConfidences.push(action.payload);
      } else {
        state.visibleConfidences.splice(index, 1);
      }
    },
    confidenceReset: (state) => {
      state.visibleConfidences = [
        Confidence.ProbabilidadAlta,
        Confidence.ProbabilidadMedia,
        Confidence.ProbabilidadBaja,
        Confidence.Procesado,
        Confidence.Saturado,
        Confidence.ContaminadoPorNubes,
      ];
    },
  },
});

export const { dateChanged, hourChanged, confidenceToggled, confidenceReset } =
  filtersSlice.actions;
