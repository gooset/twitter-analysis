import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showUserProfile: false,
  tweets: [],
};

const tweetsTimelineSlice = createSlice({
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

export const { setTweets, setShowUserProfile, clearTweets } = tweetsTimelineSlice.actions;
export default tweetsTimelineSlice.reducer;

