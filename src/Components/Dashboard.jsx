import React from "react";
import NewTweet from "./NewTweet";
import Tweets from "./Tweets";

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <NewTweet />
          <Tweets />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
