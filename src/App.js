import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";

function App() {

  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };

  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} 
        handleDelete={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;
