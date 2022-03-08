import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

import FeedbackStats from "./components/FeedbackStats";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIcon from "./components/AboutIcon";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
