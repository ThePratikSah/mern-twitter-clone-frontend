import React from "react";

function NewTweet() {
  const newTweet = () => {
    // make a req to new tweet api
  };

  return (
    <div className="card mb-3" style={{ width: "100%" }}>
      <div className="card-body">
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="What's in your mind?"
          />
        </div>
        <div className="mb-3">
          <input className="form-control" type="file" />
        </div>
      </div>
      <div className="card-footer">
        <button onClick={newTweet} className="btn btn-primary">
          Tweet
        </button>
      </div>
    </div>
  );
}

export default NewTweet;
