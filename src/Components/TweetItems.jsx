import React from "react";

function TweetItems({
  imageUrl,
  userName,
  fullName,
  tweet,
  tweetImg,
  createdAt,
}) {
  let exactDate = createdAt.split("T")[0];

  let date = exactDate.split("-")[2];
  let month = exactDate.split("-")[1];
  let year = exactDate.split("-")[0];

  return (
    <div className="mb-3 d-flex border-bottom border-3">
      <div style={{ marginRight: "10px" }}>
        <img
          src={"http://localhost:3000/" + imageUrl}
          alt={userName}
          style={{
            objectFit: "cover",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="tweet-details">
        <div className="d-flex">
          <p className="fw-bold">{fullName}</p>
          <span className="mx-1">&bull;</span> <p>@{userName}</p>
          <span className="mx-1">&bull;</span>
          <p>{exactDate}</p>
        </div>
        <div className="tweet-description">
          {tweetImg && (
            <img
              className="rounded-3 mb-2"
              src={"http://localhost:3000/" + tweetImg}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          )}
          <p className="tweet">{tweet}</p>
        </div>
      </div>
    </div>
  );
}

export default TweetItems;
