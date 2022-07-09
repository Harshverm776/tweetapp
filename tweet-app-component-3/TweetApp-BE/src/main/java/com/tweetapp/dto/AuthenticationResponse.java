package com.tweetapp.dto;

public class AuthenticationResponse {

	private String response;

	public AuthenticationResponse() {
		super();
	}

	public AuthenticationResponse(String response) {
		super();
		this.response = response;
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	@Override
	public String toString() {
		return "AuthenticationResponse [response=" + response + "]";
	}

}
