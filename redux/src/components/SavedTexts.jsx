import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  deleteText, 
  clearAllTexts,
  selectSavedTexts 
} from '../redux/textSlice';

function SavedTexts() {
  const dispatch = useDispatch();
  const savedTexts = useSelector(selectSavedTexts);

  const handleDelete = (id) => {
    dispatch(deleteText(id));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all saved texts?')) {
      dispatch(clearAllTexts());
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Saved Texts</h2>
        {savedTexts.length > 0 && (
          <button 
            onClick={handleClearAll}
            className="text-red-500 hover:bg-red-50 p-2 rounded"
          >
            Clear All
          </button>
        )}
      </div>

      {savedTexts.length === 0 ? (
        <p className="text-gray-500 italic">No saved texts yet</p>
      ) : (
        <div className="space-y-4">
          {savedTexts.map((textEntry) => (
            <div 
              key={textEntry.id} 
              className="border rounded-lg p-4 relative"
            >
              <p className="whitespace-pre-wrap">{textEntry.text}</p>
              
              <div className="text-xs text-gray-500 mt-2">
                Saved on: {new Date(textEntry.timestamp).toLocaleString()}
              </div>
              
              <button 
                onClick={() => handleDelete(textEntry.id)}
                className="absolute top-2 right-2 text-red-500 hover:bg-red-50 p-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedTexts;