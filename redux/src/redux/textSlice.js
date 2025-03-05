import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content: "",
};

export const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        updateText: (state, action) => {
            state.content = action.payload;
        },
    },
})

// Export the action creator for use in components
export const {updateText} = textSlice.actions;

// Export the reducer for use in the store
export default textSlice.reducer;

// Selector to access the text content from components
export const selectText = (state) => state.text.content;