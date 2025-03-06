import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateText, selectText } from '../redux/textSlice';

function TextInput() {
  // useDispatch returns a function that lets us dispatch actions
  const dispatch = useDispatch();
  
  // useSelector allows us to extract data from the Redux store state
  const currentText = useSelector(selectText);

  // This function dispatches the updateText action when the textarea changes
  const handleTextChange = (e) => {
    dispatch(updateText(e.target.value));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Input Component</h2>
      <p className="mb-2 text-gray-600">
        Type anything in the textarea below. It will be stored in Redux.
      </p>
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="8"
        placeholder="Type your text here..."
        value={currentText}
        onChange={handleTextChange}
      ></textarea>
    </div>
  );
}

export default TextInput;