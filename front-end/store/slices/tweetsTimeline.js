import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showUserProfile: false,
  tweets: [],
};

const tweetsTimeline = createSlice({
  name: "tweetsTimeline",
  initialState,
  reducers: {
    setTweets(state, action) {
      state.tweets = action.payload;
    },
    setShowUserProfile(state, action) {
      state.showUserProfile = action.payload;
    },
    clearTweets(state) {
      state.tweets = [];
      state.showUserProfile = false;
    },
  },
});

export const timelineActions = tweetsTimeline.actions;
export default tweetsTimeline.reducer;
