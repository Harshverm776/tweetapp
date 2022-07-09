package com.tweetapp.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Like {

	private String tweetId;
	private String likedBy;

	public String getTweetId() {
		return tweetId;
	}

	public void setTweetId(String tweetId) {
		this.tweetId = tweetId;
	}

	public String getLikedBy() {
		return likedBy;
	}

	public void setLikedBy(String likedBy) {
		this.likedBy = likedBy;
	}

	public Like() {
		super();
	}

	public Like(String tweetId, String likedBy) {
		super();
		this.tweetId = tweetId;
		this.likedBy = likedBy;
	}

	@Override
	public String toString() {
		return "Like [tweetId=" + tweetId + ", likedBy=" + likedBy + "]";
	}

}
