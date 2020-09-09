import React from "react";

const ReviewProduct = ({
  setReviewFormVal,
  reviewFormVal,
  handleValues,
  activeReviewForm,
}) => {
  return (
    <div
      className={
        activeReviewForm ? "form-review form-review-active" : "form-review"
      }
    >
      <form onSubmit={handleValues}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          value={reviewFormVal.title}
          onChange={(e) =>
            setReviewFormVal({ ...reviewFormVal, title: e.currentTarget.value })
          }
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          value={reviewFormVal.name}
          onChange={(e) =>
            setReviewFormVal({ ...reviewFormVal, name: e.currentTarget.value })
          }
        />
        <label htmlFor="comment">Comment Here</label>
        <textarea
          placeholder="Write Your Review Here"
          value={reviewFormVal.body}
          onChange={(e) =>
            setReviewFormVal({
              ...reviewFormVal,
              body: e.currentTarget.value,
            })
          }
        ></textarea>
        <button style={{ backgroundColor: "#c6a85b" }} type="submit">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewProduct;
