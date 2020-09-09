import React from "react";

const Review = ({ review }) => {
  return (
    <div className="comments-section my-2">
      <h4>{review.title}</h4>
      <h6>{review.body}</h6>
      <p>
        {review.name} on {review.date}
      </p>
    </div>
  );
};

export default Review;
