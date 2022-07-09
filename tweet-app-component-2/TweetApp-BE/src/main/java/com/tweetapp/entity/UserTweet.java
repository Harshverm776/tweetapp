package com.tweetapp.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class UserTweet {

	private String tweetId;
	private String userId;
	private String time;
	private String tweetText;
	private String tags;

	public String getTweetId() {
		return tweetId;
	}

	public void setTweetId(String tweetId) {
		this.tweetId = tweetId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getTweetText() {
		return tweetText;
	}

	public void setTweetText(String tweetText) {
		this.tweetText = tweetText;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	@Override
	public String toString() {
		return "UserTweet [tweetId=" + tweetId + ", userId=" + userId + ", time=" + time + ", tweetText=" + tweetText
				+ ", tags=" + tags + "]";
	}

	public UserTweet(String tweetId, String userId, String time, String tweetText, String tags) {
		super();
		this.tweetId = tweetId;
		this.userId = userId;
		this.time = time;
		this.tweetText = tweetText;
		this.tags = tags;
	}

	public UserTweet() {
		super();
	}

}
