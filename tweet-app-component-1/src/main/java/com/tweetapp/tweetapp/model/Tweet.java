package com.tweetapp.tweetapp.model;

import java.sql.Date;

public class Tweet {

	public Integer userId;
	public Integer tweetId;
	public String tweet;
	public Date created;

	public Date getCreated() {
		return created;
	}

	public void setCreated(java.sql.Date created) {
		this.created = created;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getTweetId() {
		return tweetId;
	}

	public void setTweetId(Integer tweetId) {
		this.tweetId = tweetId;
	}

	public String getTweet() {
		return tweet;
	}

	public void setTweet(String tweet) {
		this.tweet = tweet;
	}

}
