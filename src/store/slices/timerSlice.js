import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRunning: false,
  stage: "FOCUS",
  prevStage: "BREAK",
  focusStartTime: null,
  focusEndTime: null,
  focusData: {}, 
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    toggleRunning: (state) => {
      state.isRunning = !state.isRunning;
    },
    nextStage: (state) => {
      state.prevStage = state.stage;

      if (state.stage === "FOCUS") {
        const today = new Date().toLocaleDateString();

        if (!state.focusData[today]) {
          state.focusData[today] = 0;
        }

        state.focusData[today] += state.focusEndTime - state.focusStartTime;
      }

      switch (state.stage) {
        default:
        case "FOCUS":
          state.stage = "BREAK";
          break;
        case "BREAK":
          state.stage = "FOCUS";
          break;
      }
    },
    resetTimer: () => initialState,
    setFocusStartTime: (state, action) => {
      state.focusStartTime = action.payload;
    },
    setFocusEndTime: (state, action) => {
      state.focusEndTime = action.payload;
    },
    setInitialFocusData: (state, action) => {
      state.focusData = action.payload;
    },
  },
});

export const {
  toggleRunning,
  nextStage,
  resetTimer,
  setFocusStartTime,
  setFocusEndTime,
  setInitialFocusData,
} = timerSlice.actions;

export default timerSlice.reducer;
