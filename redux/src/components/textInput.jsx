import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCurrentText,
  saveText,
  navigatePreviousHistory,
  navigateNextHistory,
  selectCurrentText,
  selectSavedTexts,
  selectHistoryIndex,
} from "../redux/textSlice";

function Textinput() {
  const dispatch = useDispatch();
  const currentText = useSelector(selectCurrentText);
  const savedTexts = useSelector(selectSavedTexts);
  const historyIndex = useSelector(selectHistoryIndex);

  // Warn user about unsaved content before leaving the page
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (currentText.trim()) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [currentText]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      {/* Textarea for user input */}
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="10"
        placeholder="Start typing your text here..."
        value={currentText}
        onChange={(e) => dispatch(updateCurrentText(e.target.value))}
      />

      {/* Action buttons */}
      <div className="flex space-x-2">
        <button
          onClick={() => dispatch(saveText())}
          disabled={!currentText.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Save
        </button>
        <button
          onClick={() => dispatch(navigatePreviousHistory())}
          disabled={historyIndex <= 0}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => dispatch(navigateNextHistory())}
          disabled={historyIndex >= savedTexts.length - 1}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Textinput;