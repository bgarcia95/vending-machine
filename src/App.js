import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import configStore from "./redux/store/config";
import theme from "./utils/theme";

const App = () => {
  return (
    <Provider store={configStore}>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <header className='App-header'>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>
          </header>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
