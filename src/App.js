/** @format */

import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Layout from "./scenes/Layout";
import Quiz from "./scenes/Quiz";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition timeout={500} classNames="fade" key={location.key}>
          <Routes location={location}>
            <Route exact path="/" element={<Quiz />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

export default App;
