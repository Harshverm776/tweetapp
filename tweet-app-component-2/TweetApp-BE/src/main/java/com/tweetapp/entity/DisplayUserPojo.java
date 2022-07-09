package com.tweetapp.entity;

public class DisplayUserPojo {

	private String firstName;
	private String lastName;
	private String email;
	private String userId;
	private String contactNumber;

	public DisplayUserPojo() {

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public DisplayUserPojo(String firstName, String lastName, String email, String userId, String contactNumber) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.userId = userId;
		this.contactNumber = contactNumber;
	}

	@Override
	public String toString() {
		return "DisplayUserPojo [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", userId="
				+ userId + ", contactNumber=" + contactNumber + "]";
	}

}
