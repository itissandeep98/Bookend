import React from 'react';
import './App.css';
import Main from './Components/MainComponent';
import Header from './Components/NavbarComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
