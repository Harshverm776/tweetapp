package com.tweetapp.dto;

public class Reply {

	private String comment;

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Reply() {
		super();
	}

	public Reply(String comment) {
		super();
		this.comment = comment;
	}

	@Override
	public String toString() {
		return "Reply [comment=" + comment + "]";
	}

}
