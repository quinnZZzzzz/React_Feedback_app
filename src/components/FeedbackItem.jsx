import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "../shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ feedback }) {
  const { deleteItem } = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => deleteItem(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
