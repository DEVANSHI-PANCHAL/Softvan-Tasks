import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeConatainer from "./components/CakeConatainer";
import Info from "./components/Info";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Info />
        <CakeConatainer />
      </div>
    </Provider>
  );
};

export default App;
