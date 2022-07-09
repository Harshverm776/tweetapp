package com.tweetapp.dto;

public class ErrorResponse {

	private String response;

	public ErrorResponse() {
		super();
	}

	public ErrorResponse(String response) {
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
		return "ErrorResponse [response=" + response + "]";
	}

}
