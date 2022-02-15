// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.scss';
import { Home } from './Home/Home';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { render } from "react-dom";

export function App() {
  return (
    <>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
