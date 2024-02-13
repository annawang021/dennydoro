import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  focusLengthHrs: {
    friendlyName: "focus length (hrs)",
    type: "number",
    value: 1,
  },
  focusLengthMins: {
    friendlyName: "focus length (mins)",
    type: "number",
    value: 0,
  },
  breakLength: {
    friendlyName: "break length (mins)",
    type: "number",
    value: 10,
  },
  sound: {
    friendlyName: "sound",
    type: "bool",
    value: true,
  },
  notify: {
    friendlyName: "notifications",
    type: "bool",
    value: true,
  },
  focusStartTime: null,
  focusEndTime: null,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSetting: (state, action) => {
      state[action.payload.name].value = action.payload.value;
    },
    resetSettings: (state) => {
      return initialState;
    },
  },
});

export const {
  updateSetting,
  resetSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
