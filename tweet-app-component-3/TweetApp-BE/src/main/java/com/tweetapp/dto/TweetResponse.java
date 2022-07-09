package com.tweetapp.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class TweetResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String tweetId;
	private String username;
	private String tweetText;
	private String firstName;
	private String lastName;
	private String tweetDate;
	private Integer likesCount;
	private Integer commentsCount;
	private Boolean likeStatus;
	private List<Comment> comments = new ArrayList<>();

	public TweetResponse() {
		super();
		// TODO Auto-generated constructor stub
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

	public String getTweetText() {
		return tweetText;
	}

	public void setTweetText(String tweetText) {
		this.tweetText = tweetText;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getTweetDate() {
		return tweetDate;
	}

	public void setTweetDate(String tweetDate) {
		this.tweetDate = tweetDate;
	}

	public Integer getLikesCount() {
		return likesCount;
	}

	public void setLikesCount(Integer likesCount) {
		this.likesCount = likesCount;
	}

	public Integer getCommentsCount() {
		return commentsCount;
	}

	public void setCommentsCount(Integer commentsCount) {
		this.commentsCount = commentsCount;
	}

	public Boolean getLikeStatus() {
		return likeStatus;
	}

	public void setLikeStatus(Boolean likeStatus) {
		this.likeStatus = likeStatus;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public TweetResponse(String tweetId, String username, String tweetText, String firstName, String lastName,
			String tweetDate, Integer likesCount, Integer commentsCount, Boolean likeStatus, List<Comment> comments) {
		super();
		this.tweetId = tweetId;
		this.username = username;
		this.tweetText = tweetText;
		this.firstName = firstName;
		this.lastName = lastName;
		this.tweetDate = tweetDate;
		this.likesCount = likesCount;
		this.commentsCount = commentsCount;
		this.likeStatus = likeStatus;
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "TweetResponse [tweetId=" + tweetId + ", username=" + username + ", tweetText=" + tweetText
				+ ", firstName=" + firstName + ", lastName=" + lastName + ", tweetDate=" + tweetDate + ", likesCount="
				+ likesCount + ", commentsCount=" + commentsCount + ", likeStatus=" + likeStatus + ", comments="
				+ comments + "]";
	}

}
