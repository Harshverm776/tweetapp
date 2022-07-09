package com.tweetapp.exception;

public class UsernameAlreadyExists extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UsernameAlreadyExists(String msg) {
		super(msg);
	}
}
