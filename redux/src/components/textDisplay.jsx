import React from 'react';
import { useSelector } from 'react-redux';
import { selectText } from '../redux/textSlice';

function TextDisplay() {
  // Extract the text content from Redux store using selector
  const text = useSelector(selectText);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Display Component</h2>
      <p className="mb-2 text-gray-600">
        This component displays text from Redux store:
      </p>
      <div className="p-4 bg-gray-50 rounded-md min-h-[12rem] border border-gray-200">
        {text ? (
          <p className="whitespace-pre-wrap">{text}</p>
        ) : (
          <p className="text-gray-400 italic">
            Start typing in the input component to see text appear here...
          </p>
        )}
      </div>
    </div>
  );
}

export default TextDisplay;