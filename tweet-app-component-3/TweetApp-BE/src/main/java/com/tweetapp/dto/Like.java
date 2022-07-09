package com.tweetapp.dto;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBDocument;

@DynamoDBDocument
public class Like {

	private String tweetId;
	private String username;

	public Like() {
		super();
	}

	public Like(String tweetId, String username) {
		super();
		this.tweetId = tweetId;
		this.username = username;
	}

	public String getTweetId() {
		return tweetId;
	}

	public void setTweetId(String tweetId) {
		this.tweetId = tweetId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "Like [tweetId=" + tweetId + ", username=" + username + "]";
	}

}
