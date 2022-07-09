package com.tweetapp.exception;

public class TweetDoesNotExistException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public TweetDoesNotExistException(String msg) {
		super(msg);
	}
}
