package com.tweetapp.entity;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class TweetReply {

	@NotNull
	private String tweetId;
	@NotNull
	private String userID;
	@NotNull
	private String replyTime;
	@Size(max = 144, message = "replyTweet tweet should not exceed 144 characters")
	private String replyText;
	private String tags;

	public String getTweetId() {
		return tweetId;
	}

	public void setTweetId(String tweetId) {
		this.tweetId = tweetId;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getReplyTime() {
		return replyTime;
	}

	public void setReplyTime(String replyTime) {
		this.replyTime = replyTime;
	}

	public String getReplyText() {
		return replyText;
	}

	public void setReplyText(String replyText) {
		this.replyText = replyText;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	@Override
	public String toString() {
		return "TweetReply [tweetId=" + tweetId + ", userID=" + userID + ", replyTime=" + replyTime + ", replyText="
				+ replyText + ", tags=" + tags + "]";
	}

	public TweetReply(String tweetId, String userID, String replyTime, String replyText, String tags) {
		super();
		this.tweetId = tweetId;
		this.userID = userID;
		this.replyTime = replyTime;
		this.replyText = replyText;
		this.tags = tags;
	}

	public TweetReply() {
		super();
	}

}
