import "./App.css";
import MyApp from "./container";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}

export default App;
