package com.tweetapp.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.tweetapp.dto.Comment;

@DynamoDBTable(tableName = "tweets")
public class Tweet implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@DynamoDBHashKey(attributeName = "tweetId")
	private String tweetId;
	@DynamoDBAttribute(attributeName = "username")
	private String username;
	@DynamoDBAttribute(attributeName = "tweetText")
	private String tweetText;
	@DynamoDBAttribute(attributeName = "firstName")
	private String firstName;
	@DynamoDBAttribute(attributeName = "lastName")
	private String lastName;
	@DynamoDBAttribute(attributeName = "tweetDate")
	private String tweetDate;
	@DynamoDBAttribute(attributeName = "likes")
	private List<String> likes = new ArrayList<>();
	@DynamoDBAttribute(attributeName = "comments")
	private List<Comment> comments = new ArrayList<>();

	public Tweet() {
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

	public List<String> getLikes() {
		return likes;
	}

	public void setLikes(List<String> likes) {
		this.likes = likes;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public Tweet(String tweetId, String username, String tweetText, String firstName, String lastName, String tweetDate,
			List<String> likes, List<Comment> comments) {
		super();
		this.tweetId = tweetId;
		this.username = username;
		this.tweetText = tweetText;
		this.firstName = firstName;
		this.lastName = lastName;
		this.tweetDate = tweetDate;
		this.likes = likes;
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "Tweet [tweetId=" + tweetId + ", username=" + username + ", tweetText=" + tweetText + ", firstName="
				+ firstName + ", lastName=" + lastName + ", tweetDate=" + tweetDate + ", likes=" + likes + ", comments="
				+ comments + "]";
	}

}
