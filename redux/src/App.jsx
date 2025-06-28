import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import TextInput from './components/textInput';
import SavedTexts from './components/SavedTexts';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="min-h-screen bg-gray-100 p-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <TextInput />
            <SavedTexts />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;