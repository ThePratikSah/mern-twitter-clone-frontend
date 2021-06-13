import React, { useEffect, useState } from "react";
import TweetItems from "./TweetItems";

function Tweets() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      // fetch all the latest tweets with limit of 50
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          "http://localhost:3000/tweet/fetch-tweets",
          {
            method: "POST",
            headers: new Headers({
              Authorization: `Bearer ${token}`,
            }),
          }
        );
        const data = await response.json();
        setTweets(data.tweets);
        console.log(data.tweets);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTweets();
  }, []);

  return (
    <div className="card">
      <div className="card-header">Latest tweets</div>
      <div className="card-body">
        {tweets.map((tweet) => (
          <TweetItems
            key={tweet.id}
            imageUrl={tweet.user.profileImage}
            userName={tweet.user.userName}
            fullName={tweet.user.fullName}
            tweet={tweet.tweet}
            tweetImg={tweet.imageUrl}
            createdAt={tweet.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default Tweets;
