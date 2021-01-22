import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import AppContainer from "./containers/AppContainer";
import configStore from "./redux/store/config";
import theme from "./utils/theme";

const App = () => {
  return (
    <Provider store={configStore}>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
