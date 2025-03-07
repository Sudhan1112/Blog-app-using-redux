import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentText: '', // Current input text
  savedTexts: [], // Array to store saved texts
  historyIndex: -1, // Current position in history
  maxHistoryLength: 10 // Maximum number of history entries
};

export const textSlice = createSlice({
  name: 'textManager',
  initialState,
  reducers: {
    // Update current text
    updateCurrentText: (state, action) => {
      state.currentText = action.payload;
    },
    
    // Save current text to history
    saveText: (state) => {
      // Trim and check for empty or duplicate entries
      const trimmedText = state.currentText.trim();
      if (trimmedText && 
          (state.savedTexts.length === 0 || 
           trimmedText !== state.savedTexts[state.savedTexts.length - 1].text)) {
        
        // Create new text entry
        const newEntry = {
          id: Date.now(), // Use timestamp as unique ID
          text: trimmedText,
          timestamp: new Date().toISOString()
        };

        // Add to saved texts
        state.savedTexts.push(newEntry);

        // Limit history to max length
        if (state.savedTexts.length > state.maxHistoryLength) {
          state.savedTexts.shift(); // Remove oldest entry
        }

        // Update history index
        state.historyIndex = state.savedTexts.length - 1;

        // Clear current text
        state.currentText = '';
      }
    },
    
    // Navigate to previous history entry
    navigatePreviousHistory: (state) => {
      if (state.historyIndex > 0) {
        state.historyIndex--;
        state.currentText = state.savedTexts[state.historyIndex].text;
      }
    },
    
    // Navigate to next history entry
    navigateNextHistory: (state) => {
      if (state.historyIndex < state.savedTexts.length - 1) {
        state.historyIndex++;
        state.currentText = state.savedTexts[state.historyIndex].text;
      }
    },
    
    // Delete a specific saved text
    deleteText: (state, action) => {
      const indexToRemove = state.savedTexts.findIndex(
        text => text.id === action.payload
      );
      
      if (indexToRemove !== -1) {
        state.savedTexts.splice(indexToRemove, 1);
        
        // Adjust history index if needed
        if (state.historyIndex >= state.savedTexts.length) {
          state.historyIndex = state.savedTexts.length - 1;
        }
      }
    },
    
    // Clear all saved texts
    clearAllTexts: (state) => {
      state.savedTexts = [];
      state.historyIndex = -1;
      state.currentText = '';
    }
  }
});

export const { 
  updateCurrentText, 
  saveText, 
  navigatePreviousHistory, 
  navigateNextHistory,
  deleteText,
  clearAllTexts
} = textSlice.actions;

// Selectors
export const selectCurrentText = (state) => state.textManager.currentText;
export const selectSavedTexts = (state) => state.textManager.savedTexts;
export const selectHistoryIndex = (state) => state.textManager.historyIndex;

export default textSlice.reducer;