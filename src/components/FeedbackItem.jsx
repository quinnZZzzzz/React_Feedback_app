import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "../shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ feedback }) {
  const { deleteItem, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => deleteItem(feedback.id)} className="close">
        <FaTimes color="#1B5E20" />
      </button>
      <button onClick={() => editFeedback(feedback)} className="edit">
        <FaEdit color="#1B5E20" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
