import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this id feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "this id feedback item 2",
      rating: 8,
    },
    {
      id: 3,
      text: "this id feedback item 3",
      rating: 6,
    },
  ]);

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
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        deleteItem,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
