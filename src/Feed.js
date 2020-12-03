import React from "react";
import TweetBox from "./TweetBox";
import "./Feed.css";
import "./App.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <h2>
        this twitter like page has made for
        <br /> Assignment given by HSN careers.
      </h2>
    </div>
  );
}

export default Feed;
