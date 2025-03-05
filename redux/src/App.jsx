import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TextInput from './components/TextInput';
import TextDisplay from './components/TextDisplay';

function App() {
  return (
    // Provider makes the Redux store available to any nested components
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Redux Text Sharing Demo
        </h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <TextInput />
          <TextDisplay />
        </div>
      </div>
    </Provider>
  );
}

export default App;