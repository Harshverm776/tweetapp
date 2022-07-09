package com.tweetapp.dto;

public class TweetUpdate {
	private String tweetId;
	private String tweetText;

	public TweetUpdate() {
		super();
	}

	public String getTweetId() {
		return tweetId;
	}

	public void setTweetId(String tweetId) {
		this.tweetId = tweetId;
	}

	public String getTweetText() {
		return tweetText;
	}

	public void setTweetText(String tweetText) {
		this.tweetText = tweetText;
	}

	public TweetUpdate(String tweetId, String tweetText) {
		super();
		this.tweetId = tweetId;
		this.tweetText = tweetText;
	}

	@Override
	public String toString() {
		return "TweetUpdate [tweetId=" + tweetId + ", tweetText=" + tweetText + "]";
	}

}
