import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Card from "./shared/Card";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from "./pages/AboutPage";
import AboutIcon from "./components/AboutIcon";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((element) => element.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedBackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteItem} />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIcon />
      </div>
    </Router>
  );
}

export default App;
